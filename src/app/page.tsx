import { SeachWord } from "@/components/personal/searchWord";
import { TogleTheme } from "@/components/personal/theme-togle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/lib/commands.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <Card className="max-w-[440px] sm:w-5/6 p-4">
      <TogleTheme />
      <CardHeader>
        <CardTitle>Bem vindo ao Docker Explorer</CardTitle>
        <CardDescription>Selecione o comando que deseja conhecer melhor</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <SeachWord allcommands={data} />
      </CardContent>
    </Card>
  );
}
