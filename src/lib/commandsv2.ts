import { Situacoes } from "@/types/commandsv2type";

export const commandsData:Situacoes = {
  situacoes: [
      {
          situacao: "Desejo listar containers",
          comandos: [
              {
                  comando: "docker ps",
                  descricao: "Lista todos os containers em execução.",
                  exemplo: "docker ps"
              },
              {
                  comando: "docker ps -a",
                  descricao: "Lista todos os containers, inclusive os que não estão em execução.",
                  exemplo: "docker ps -a"
              }
          ],
          subsituacoes: [
              {
                  situacao: "em execução",
                  comandos: [
                      {
                          comando: "docker ps",
                          descricao: "Lista todos os containers em execução.",
                          exemplo: "docker ps"
                      }
                  ]
              },
              {
                  situacao: "todos",
                  comandos: [
                      {
                          comando: "docker ps -a",
                          descricao: "Lista todos os containers, inclusive os que não estão em execução.",
                          exemplo: "docker ps -a"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo gerenciar containers",
          comandos: [
              {
                  comando: "docker run <imagem>",
                  descricao: "Executa um container a partir de uma imagem Docker.",
                  exemplo: "docker run ubuntu:latest"
              },
              {
                  comando: "docker stop <container_id>",
                  descricao: "Para a execução de um container em execução.",
                  exemplo: "docker stop 1a2b3c4d5e6f"
              },
              {
                  comando: "docker rm <container_id>",
                  descricao: "Remove um container específico.",
                  exemplo: "docker rm 1a2b3c4d5e6f"
              },
              {
                  comando: "docker exec -it <container_id> <comando>",
                  descricao: "Executa um comando dentro de um container em execução.",
                  exemplo: "docker exec -it 1a2b3c4d5e6f bash"
              },
              {
                  comando: "docker logs <container_id>",
                  descricao: "Exibe os logs de um container específico.",
                  exemplo: "docker logs 1a2b3c4d5e6f"
              },
              {
                  comando: "docker inspect <container_id>",
                  descricao: "Retorna informações detalhadas sobre um container.",
                  exemplo: "docker inspect 1a2b3c4d5e6f"
              },
              {
                  comando: "docker attach <container_id>",
                  descricao: "Conecta a entrada padrão, saída e erro de um container em execução.",
                  exemplo: "docker attach 1a2b3c4d5e6f"
              },
              {
                  comando: "docker top <container_id>",
                  descricao: "Exibe os processos em execução dentro de um container.",
                  exemplo: "docker top 1a2b3c4d5e6f"
              }
          ],
          subsituacoes: [
              {
                  situacao: "executar",
                  comandos: [
                      {
                          comando: "docker run <imagem>",
                          descricao: "Executa um container a partir de uma imagem Docker.",
                          exemplo: "docker run ubuntu:latest"
                      }
                  ]
              },
              {
                  situacao: "parar",
                  comandos: [
                      {
                          comando: "docker stop <container_id>",
                          descricao: "Para a execução de um container em execução.",
                          exemplo: "docker stop 1a2b3c4d5e6f"
                      }
                  ]
              },
              {
                  situacao: "remover",
                  comandos: [
                      {
                          comando: "docker rm <container_id>",
                          descricao: "Remove um container específico.",
                          exemplo: "docker rm 1a2b3c4d5e6f"
                      }
                  ]
              },
              {
                  situacao: "executar comando",
                  comandos: [
                      {
                          comando: "docker exec -it <container_id> <comando>",
                          descricao: "Executa um comando dentro de um container em execução.",
                          exemplo: "docker exec -it 1a2b3c4d5e6f bash"
                      }
                  ]
              },
              {
                  situacao: "ver logs",
                  comandos: [
                      {
                          comando: "docker logs <container_id>",
                          descricao: "Exibe os logs de um container específico.",
                          exemplo: "docker logs 1a2b3c4d5e6f"
                      }
                  ]
              },
              {
                  situacao: "inspecionar",
                  comandos: [
                      {
                          comando: "docker inspect <container_id>",
                          descricao: "Retorna informações detalhadas sobre um container.",
                          exemplo: "docker inspect 1a2b3c4d5e6f"
                      }
                  ]
              },
              {
                  situacao: "conectar",
                  comandos: [
                      {
                          comando: "docker attach <container_id>",
                          descricao: "Conecta a entrada padrão, saída e erro de um container em execução.",
                          exemplo: "docker attach 1a2b3c4d5e6f"
                      }
                  ]
              },
              {
                  situacao: "ver processos",
                  comandos: [
                      {
                          comando: "docker top <container_id>",
                          descricao: "Exibe os processos em execução dentro de um container.",
                          exemplo: "docker top 1a2b3c4d5e6f"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo gerenciar imagens Docker",
          comandos: [
              {
                  comando: "docker images",
                  descricao: "Lista todas as imagens Docker no sistema.",
                  exemplo: "docker images"
              },
              {
                  comando: "docker rmi <imagem>",
                  descricao: "Remove uma imagem Docker do sistema.",
                  exemplo: "docker rmi ubuntu:latest"
              },
              {
                  comando: "docker build -t <nome_da_imagem> .",
                  descricao: "Constrói uma imagem Docker a partir de um Dockerfile no diretório atual.",
                  exemplo: "docker build -t minha_imagem ."
              },
              {
                  comando: "docker history <imagem>",
                  descricao: "Exibe o histórico de uma imagem Docker.",
                  exemplo: "docker history ubuntu:latest"
              },
              {
                  comando: "docker save <imagem> -o <arquivo.tar>",
                  descricao: "Salva uma imagem Docker em um arquivo .tar.",
                  exemplo: "docker save ubuntu:latest -o ubuntu.tar"
              },
              {
                  comando: "docker load -i <arquivo.tar>",
                  descricao: "Carrega uma imagem Docker de um arquivo .tar.",
                  exemplo: "docker load -i ubuntu.tar"
              }
          ],
          subsituacoes: [
              {
                  situacao: "listar",
                  comandos: [
                      {
                          comando: "docker images",
                          descricao: "Lista todas as imagens Docker no sistema.",
                          exemplo: "docker images"
                      }
                  ]
              },
              {
                  situacao: "remover",
                  comandos: [
                      {
                          comando: "docker rmi <imagem>",
                          descricao: "Remove uma imagem Docker do sistema.",
                          exemplo: "docker rmi ubuntu:latest"
                      }
                  ]
              },
              {
                  situacao: "construir",
                  comandos: [
                      {
                          comando: "docker build -t <nome_da_imagem> .",
                          descricao: "Constrói uma imagem Docker a partir de um Dockerfile no diretório atual.",
                          exemplo: "docker build -t minha_imagem ."
                      }
                  ]
              },
              {
                  situacao: "ver histórico",
                  comandos: [
                      {
                          comando: "docker history <imagem>",
                          descricao: "Exibe o histórico de uma imagem Docker.",
                          exemplo: "docker history ubuntu:latest"
                      }
                  ]
              },
              {
                  situacao: "salvar",
                  comandos: [
                      {
                          comando: "docker save <imagem> -o <arquivo.tar>",
                          descricao: "Salva uma imagem Docker em um arquivo .tar.",
                          exemplo: "docker save ubuntu:latest -o ubuntu.tar"
                      }
                  ]
              },
              {
                  situacao: "carregar",
                  comandos: [
                      {
                          comando: "docker load -i <arquivo.tar>",
                          descricao: "Carrega uma imagem Docker de um arquivo .tar.",
                          exemplo: "docker load -i ubuntu.tar"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo gerenciar serviços com Docker Compose",
          comandos: [
              {
                  comando: "docker-compose up",
                  descricao: "Inicia todos os serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose up"
              },
              {
                  comando: "docker-compose down",
                  descricao: "Para todos os serviços definidos em um arquivo docker-compose.yml e remove os containers associados.",
                  exemplo: "docker-compose down"
              },
              {
                  comando: "docker-compose logs",
                  descricao: "Exibe os logs de todos os serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose logs"
              },
              {
                  comando: "docker-compose build",
                  descricao: "Constrói os serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose build"
              },
              {
                  comando: "docker-compose restart",
                  descricao: "Reinicia os serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose restart"
              },
              {
                  comando: "docker-compose stop",
                  descricao: "Para todos os serviços definidos em um arquivo docker-compose.yml, mantendo os containers.",
                  exemplo: "docker-compose stop"
              },
              {
                  comando: "docker-compose start",
                  descricao: "Inicia os serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose start"
              },
              {
                  comando: "docker-compose pause",
                  descricao: "Pausa a execução dos serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose pause"
              },
              {
                  comando: "docker-compose unpause",
                  descricao: "Despausa a execução dos serviços definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose unpause"
              },
              {
                  comando: "docker-compose exec <service_name> <comando>",
                  descricao: "Executa um comando dentro de um serviço específico definido em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose exec web ls -l"
              },
              {
                  comando: "docker-compose kill",
                  descricao: "Força o encerramento de todos os containers de um projeto docker-compose.",
                  exemplo: "docker-compose kill"
              },
              {
                  comando: "docker-compose down -v",
                  descricao: "Além de remover os containers, remove também os volumes associados definidos em um arquivo docker-compose.yml.",
                  exemplo: "docker-compose down -v"
              },
              {
                  comando: "docker-compose push",
                  descricao: "Empurra as imagens de todos os serviços definidos em um arquivo docker-compose.yml para um registro.",
                  exemplo: "docker-compose push"
              }
          ],
          subsituacoes: [
              {
                  situacao: "iniciar",
                  comandos: [
                      {
                          comando: "docker-compose up",
                          descricao: "Inicia todos os serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose up"
                      },
                      {
                          comando: "docker-compose start",
                          descricao: "Inicia os serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose start"
                      }
                  ]
              },
              {
                  situacao: "parar",
                  comandos: [
                      {
                          comando: "docker-compose down",
                          descricao: "Para todos os serviços definidos em um arquivo docker-compose.yml e remove os containers associados.",
                          exemplo: "docker-compose down"
                      },
                      {
                          comando: "docker-compose stop",
                          descricao: "Para todos os serviços definidos em um arquivo docker-compose.yml, mantendo os containers.",
                          exemplo: "docker-compose stop"
                      }
                  ]
              },
              {
                  situacao: "reiniciar",
                  comandos: [
                      {
                          comando: "docker-compose restart",
                          descricao: "Reinicia os serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose restart"
                      }
                  ]
              },
              {
                  situacao: "pausar/despausar",
                  comandos: [
                      {
                          comando: "docker-compose pause",
                          descricao: "Pausa a execução dos serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose pause"
                      },
                      {
                          comando: "docker-compose unpause",
                          descricao: "Despausa a execução dos serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose unpause"
                      }
                  ]
              },
              {
                  situacao: "executar comando",
                  comandos: [
                      {
                          comando: "docker-compose exec <service_name> <comando>",
                          descricao: "Executa um comando dentro de um serviço específico definido em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose exec web ls -l"
                      }
                  ]
              },
              {
                  situacao: "ver logs",
                  comandos: [
                      {
                          comando: "docker-compose logs",
                          descricao: "Exibe os logs de todos os serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose logs"
                      }
                  ]
              },
              {
                  situacao: "construir",
                  comandos: [
                      {
                          comando: "docker-compose build",
                          descricao: "Constrói os serviços definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose build"
                      }
                  ]
              },
              {
                  situacao: "forçar encerramento",
                  comandos: [
                      {
                          comando: "docker-compose kill",
                          descricao: "Força o encerramento de todos os containers de um projeto docker-compose.",
                          exemplo: "docker-compose kill"
                      }
                  ]
              },
              {
                  situacao: "remover com volumes",
                  comandos: [
                      {
                          comando: "docker-compose down -v",
                          descricao: "Além de remover os containers, remove também os volumes associados definidos em um arquivo docker-compose.yml.",
                          exemplo: "docker-compose down -v"
                      }
                  ]
              },
              {
                  situacao: "publicar",
                  comandos: [
                      {
                          comando: "docker-compose push",
                          descricao: "Empurra as imagens de todos os serviços definidos em um arquivo docker-compose.yml para um registro.",
                          exemplo: "docker-compose push"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo gerenciar redes e volumes",
          comandos: [
              {
                  comando: "docker network ls",
                  descricao: "Lista todas as redes Docker no sistema.",
                  exemplo: "docker network ls"
              },
              {
                  comando: "docker volume ls",
                  descricao: "Lista todos os volumes Docker no sistema.",
                  exemplo: "docker volume ls"
              },
              {
                  comando: "docker cp <origem> <destino>",
                  descricao: "Copia arquivos ou diretórios entre o host e um container.",
                  exemplo: "docker cp arquivo.txt meu_container:/diretorio"
              }
          ],
          subsituacoes: [
              {
                  situacao: "listar redes",
                  comandos: [
                      {
                          comando: "docker network ls",
                          descricao: "Lista todas as redes Docker no sistema.",
                          exemplo: "docker network ls"
                      }
                  ]
              },
              {
                  situacao: "listar volumes",
                  comandos: [
                      {
                          comando: "docker volume ls",
                          descricao: "Lista todos os volumes Docker no sistema.",
                          exemplo: "docker volume ls"
                      }
                  ]
              },
              {
                  situacao: "copiar arquivos",
                  comandos: [
                      {
                          comando: "docker cp <origem> <destino>",
                          descricao: "Copia arquivos ou diretórios entre o host e um container.",
                          exemplo: "docker cp arquivo.txt meu_container:/diretorio"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo realizar operações avançadas",
          comandos: [
              {
                  comando: "docker events",
                  descricao: "Exibe eventos Docker em tempo real.",
                  exemplo: "docker events"
              },
              {
                  comando: "docker system df",
                  descricao: "Exibe o uso de disco do sistema Docker.",
                  exemplo: "docker system df"
              },
              {
                  comando: "docker system prune",
                  descricao: "Remove todos os recursos Docker não utilizados (containers, imagens, volumes e redes).",
                  exemplo: "docker system prune"
              }
          ],
          subsituacoes: [
              {
                  situacao: "ver eventos",
                  comandos: [
                      {
                          comando: "docker events",
                          descricao: "Exibe eventos Docker em tempo real.",
                          exemplo: "docker events"
                      }
                  ]
              },
              {
                  situacao: "ver uso de disco",
                  comandos: [
                      {
                          comando: "docker system df",
                          descricao: "Exibe o uso de disco do sistema Docker.",
                          exemplo: "docker system df"
                      }
                  ]
              },
              {
                  situacao: "limpar recursos",
                  comandos: [
                      {
                          comando: "docker system prune",
                          descricao: "Remove todos os recursos Docker não utilizados (containers, imagens, volumes e redes).",
                          exemplo: "docker system prune"
                      }
                  ]
              }
          ]
      },
      {
          situacao: "Desejo ver informações do sistema",
          comandos: [
              {
                  comando: "docker info",
                  descricao: "Exibe informações sobre o ambiente Docker.",
                  exemplo: "docker info"
              },
              {
                  comando: "docker version",
                  descricao: "Exibe a versão do cliente e do servidor Docker.",
                  exemplo: "docker version"
              },
              {
                  comando: "docker stats",
                  descricao: "Exibe informações de uso de recursos dos containers em execução.",
                  exemplo: "docker stats"
              }
          ],
          subsituacoes: [
              {
                  situacao: "ver informações do ambiente",
                  comandos: [
                      {
                          comando: "docker info",
                          descricao: "Exibe informações sobre o ambiente Docker.",
                          exemplo: "docker info"
                      }
                  ]
              },
              {
                  situacao: "ver versão",
                  comandos: [
                      {
                          comando: "docker version",
                          descricao: "Exibe a versão do cliente e do servidor Docker.",
                          exemplo: "docker version"
                      }
                  ]
              },
              {
                  situacao: "ver uso de recursos",
                  comandos: [
                      {
                          comando: "docker stats",
                          descricao: "Exibe informações de uso de recursos dos containers em execução.",
                          exemplo: "docker stats"
                      }
                  ]
              }
          ]
      }
  ]
}
