import { SeachWord } from "@/components/personal/searchWord";
import { Card, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="max-w-[440px] sm:w-5/6">
    <CardFooter className="space-x-2">
      <SeachWord/>
    </CardFooter>
  </Card>
  );
}
