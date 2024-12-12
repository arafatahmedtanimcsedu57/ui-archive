import { Button, Icons } from "ui";

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <div id="button-section" className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-5">
          <Button>Primary Button</Button>
          <Button variant="outline"> Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Button size="sm">Small Button</Button>
          <Button> Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Button size="sm">Small Button</Button>
          <Button> Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>

          <Button>
            <Icons.MailOpen size={16} /> Login with Email
          </Button>

          <Button>
            Preview <Icons.ArrowBigRight size={16} />
          </Button>

          <Button>
            <Icons.Sun size={16} />
          </Button>

          <Button variant="outline">
            <Icons.Moon size={16} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Button className="py-0">
            <Icons.ArrowBigLeft size={16} />
            <span className="border-r h-full"></span>
            <span>Preview </span>
          </Button>

          <Button className="py-0">
            <span>Preview </span>
            <span className="border-r h-full"></span>
            <Icons.ArrowBigRight size={16} />
          </Button>

          <Button>
            <Icons.ArrowBigLeft size={16} />
            <div className="border-r h-full"></div>
            <span>Preview </span>
          </Button>

          <Button>
            <span>Preview </span>
            <div className="border-r h-full"></div>
            <Icons.ArrowBigRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
