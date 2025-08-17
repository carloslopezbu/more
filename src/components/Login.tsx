import { Shrimp, Palette, Dog } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export function LoginForm({
  className,
  Icon,
  updateCurrentIcon,
}: {
  className: string;
  Icon: IconType;
  updateCurrentIcon: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <button
                className="flex size-8 items-center justify-center rounded-md "
                onClick={() => updateCurrentIcon((prev) => (prev + 1) % 3)}
              >
                <Icon className="size-10 hover:cursor-pointer text-rose-400" />
              </button>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Beinvenido a Morelandia.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-rose-400 hover:bg-rose-500 transform-color duration-300"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default function Login() {
  const Icons = [Dog, Palette, Shrimp];
  const [currentIcon, updateCurrentIcon] = useState(0);

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          className=""
          Icon={Icons[currentIcon]}
          updateCurrentIcon={updateCurrentIcon}
        />
      </div>
    </div>
  );
}
