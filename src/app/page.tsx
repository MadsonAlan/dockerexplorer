import { SeachWord } from "@/components/personal/searchWord";
import { TogleTheme } from "@/components/personal/theme-togle";
import { Card, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="max-w-[440px] sm:w-5/6 p-4">
      <TogleTheme />
    <CardFooter className="space-x-2">
      <SeachWord/>
    </CardFooter>
  </Card>
  );
}
