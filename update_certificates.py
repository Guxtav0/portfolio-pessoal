import os
import json
import shutil

# Configurações de caminhos
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CERTS_DIR = os.path.join(BASE_DIR, "Certificações")

# Extensões de imagem suportadas
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}

def format_course_name(filename):
    # Remove a extensão do arquivo
    name, _ = os.path.splitext(filename)
    # Substitui sublinhados por espaços
    name = name.replace("_", " ")
    # Limpa espaços extras
    name = " ".join(name.split())
    return name

def update_certs():
    if not os.path.exists(CERTS_DIR):
        print(f"Erro: A pasta {CERTS_DIR} não existe.")
        return

    data = []

    # Listar as pastas de instituições
    institutions = [d for d in os.listdir(CERTS_DIR) if os.path.isdir(os.path.join(CERTS_DIR, d))]

    for inst in institutions:
        inst_path = os.path.join(CERTS_DIR, inst)
        logo_dir = os.path.join(inst_path, "logo")
        
        # Migração automática: se a pasta 'logo' não existir, tenta criar e mover a logo
        if not os.path.exists(logo_dir):
            os.makedirs(logo_dir)
            # Encontrar arquivo que tem o mesmo nome da instituição ou correspondente
            for file in os.listdir(inst_path):
                file_path = os.path.join(inst_path, file)
                if os.path.isfile(file_path):
                    name_lower = file.lower()
                    # Verifica se o arquivo é a logo (contém o nome da instituição ou correspondente)
                    is_logo = (
                        inst.lower() in name_lower or
                        "harrvard" in name_lower or
                        "hashtag" in name_lower or
                        "udemy" in name_lower
                    ) and any(file.endswith(ext) for ext in IMAGE_EXTENSIONS)
                    
                    if is_logo:
                        shutil.move(file_path, os.path.join(logo_dir, file))
                        print(f"Migrado logo: {file} -> logo/{file}")
                        break

        # Encontrar a logo na pasta 'logo'
        logo_file = ""
        if os.path.exists(logo_dir):
            logo_files = [f for f in os.listdir(logo_dir) if any(f.endswith(ext) for ext in IMAGE_EXTENSIONS)]
            if logo_files:
                logo_file = os.path.join("Certificações", inst, "logo", logo_files[0]).replace("\\", "/")

        # Listar os certificados na raiz da pasta da instituição
        certificates = []
        for file in os.listdir(inst_path):
            file_path = os.path.join(inst_path, file)
            # Exclui pastas (como 'logo') e apenas busca arquivos de imagens válidos
            if os.path.isfile(file_path) and any(file.endswith(ext) for ext in IMAGE_EXTENSIONS):
                course_name = format_course_name(file)
                relative_path = os.path.join("Certificações", inst, file).replace("\\", "/")
                certificates.append({
                    "filename": file,
                    "name": course_name,
                    "path": relative_path
                })

        # Adiciona a instituição se tiver logo ou certificados
        if logo_file or certificates:
            data.append({
                "institution": inst,
                "logo": logo_file,
                "count": len(certificates),
                "courses": certificates
            })

    # Gravar o arquivo certificados.json
    output_path = os.path.join(BASE_DIR, "certificados.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

    print(f"Sucesso! {output_path} atualizado com {len(data)} instituições.")

if __name__ == "__main__":
    update_certs()
