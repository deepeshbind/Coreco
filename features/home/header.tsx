import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { Button } from "@/components/ui/button";
import TwitterIcon from "@/lib/icons/twitter";
import GithubIcon from "@/lib/icons/github";
import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <>
      <div className="flex flex-row justify-between sticky py-4 z-50 px-8 rounded-2xl border border-primary/10">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <div>
              <span className="text-3xl font-semibold flex items-center gap-2">
                Coreco
                <span className="text-[10px] rounded-full bg-primary/10 px-2 py-1 w-fit">
                  BETA
                </span>
              </span>
            </div>
          </div>
          <Separator
        orientation="vertical"
        className="m-2 h-6"
        />
          <div>
            <Link
            href="https://x.com/intent/post?text=%F0%9F%98%A9%20Stop%20the%20%22push-and-pray%22%20cycle.%0A%0AVisually%20build%2C%20import%2C%20and%20edit%20your%20CI%2FCD%20pipelines%20%E2%9C%A8%20Get%20perfect%2C%20ready-to-commit%20YAML%20in%20seconds.%0A%0ACheckout%20ActionG%20%E2%80%94%20an%20open-source%20visualizer%20for%20your%20GitHub%20Actions%20workflows.%0A%0Ahttps%3A%2F%2Fgithub.com%2Fdufferdeepu%2FActionG"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <TwitterIcon className="size-4 " />
            </Button>
          </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center">
        {/* <ThemeSwitch /> */}
        <Separator
        orientation="vertical"
        className="m-2 h-6"
        />
        <Link
          href="https://github.com/DufferDeepu/ActionG"
          target="_blank"
        >
          <Button variant="accent">
            <GithubIcon className=" size-4" />
            Give us a star
          </Button>
        </Link>
        <Separator
        orientation="vertical"
        className="m-2 h-6"
        />
        <UserButton />
      </div>
      </div>
    </>
  );
}
