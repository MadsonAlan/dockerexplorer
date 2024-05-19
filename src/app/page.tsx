'use client'
import { Combobox } from "@/components/personal/combobox";
import { SeachWord } from "@/components/personal/searchWord";
import { TogleTheme } from "@/components/personal/theme-togle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Comando } from "@/types/commandsv2type";
import { useState } from "react";

export default function Home() {
  const [ comandos, setComandos ] = useState<Comando[]>()
  const capturarComando = (comandos: Comando[]) => {
    if (comandos) {
      setComandos(comandos)
    }
  }
  function validaComandosRecebidos(comandos: Comando[] | undefined) {
    if (comandos && comandos.length > 1) {
      return (
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full pl-4"
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {comandos.map((comando: Comando, index) =>
              <CarouselItem key={index} className="pt-1">
                <Card className="max-w-[440px] sm:w-5/6 h-full">
                  {
                    comandos ? <></> : <CardHeader>
                      <CardTitle>Selecione ao lado o contexto de sua dúvida</CardTitle>
                      <CardDescription>Aqui será descrito o comando e como usá-lo</CardDescription>
                      <Separator />
                    </CardHeader>
                  }
                  <CardContent>
                    <SeachWord comando={comando} />
                  </CardContent>
                </Card>
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      )

    } else {
      return (
        <Card className="max-w-[440px] sm:w-5/6 p-4 h-[300px]">
          {
            comandos ? <></> : <CardHeader>
              <CardTitle>Selecione ao lado o contexto de sua dúvida</CardTitle>
              <CardDescription>Aqui será descrito o comando e como usá-lo</CardDescription>
            </CardHeader>
          }
          <CardContent>
            {comandos ? <SeachWord comando={comandos[ 0 ]} /> : <></>}
          </CardContent>
        </Card>
      )
    }
  }

  return (

    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
      <div className="h-screen flex items-center justify-center flex-col ">
        <span className="self-start">
          <TogleTheme />
        </span>
        <h1 className="text-5xl subpixel-antialiased mt-4 font-bold text-docker-blue">
          Explore o Universo do Docker
        </h1>
        <p className="text-lg mt-4">
          Descubra o significado de cada comando e aprofunde-se no mundo dos containers.
        </p>
        <Combobox comandoselecionado={capturarComando} />
      </div>
      <div className="h-screen flex items-center justify-center flex-col">
        {
          validaComandosRecebidos(comandos)
        }
      </div>
    </div>
  );
}
