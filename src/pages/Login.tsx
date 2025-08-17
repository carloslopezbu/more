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
  const [spins, setSpins] = useState(false);
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
                onClick={(event) => {
                  event.preventDefault();
                  if (spins) return;
                  setSpins(true);
                  setTimeout(() => {
                    updateCurrentIcon((prev) => (prev + 1) % 3);
                    setSpins(false);
                  }, 500);
                }}
              >
                <Icon
                  className={cn(
                    "size-10 hover:cursor-pointer text-violet-400 transition-all duration-500",
                    spins
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100",
                  )}
                />
              </button>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Bienvenido a Morelandia.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Correo Electronico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="w-full bg-violet-400 hover:bg-violet-500 transform-color duration-500"
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
