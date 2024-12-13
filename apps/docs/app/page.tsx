import { Button, Alert, AlertDescription, AlertTitle, Icons } from "ui";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div id="button-section" className="flex flex-col gap-4">
        <div>
          <h1 className="text-lg font-semibold leading-10">Button Component</h1>
          <p className="leading-9 text-sm">
            The `Button` component is a versatile UI element with various
            styles, sizes, and support for icons.
          </p>
        </div>

        <div id="default-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Default Buttons
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              Basic button styles include Primary.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Primary Button</Button>
          </div>
        </div>

        <div id="sizes-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Button Sizes
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              The Button component supports different sizes: Small, Medium, and
              Large.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button size="sm">Small Button</Button>
            <Button> Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </div>

        <div id="variants-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Button Variants
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              Additional button variants include Destructive and Link.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 items-center">
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="default">Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive-outline">Destructive Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>

        <div id="icons-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Buttons with Icons
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              Buttons can be enhanced with icons from the Icons library.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
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
        </div>

        <div id="dividers-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Complex Buttons with Dividers
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              Buttons can also include complex layouts with dividers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
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

        <div id="states-buttons">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Stateful Buttons{" "}
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              Buttons may have loading or disable state.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button disabled>Disabled</Button>

            <Button disabled>
              <Icons.Loader2 className="animate-spin" size={16} />
              Please wait
            </Button>
          </div>
        </div>
      </div>

      <div id="alert-section" className="flex flex-col gap-4">
        <div>
          <h1 className="text-lg font-semibold leading-10">Alert Component</h1>
          <p className="leading-9 text-sm">
            The `Alert` component is used to display important messages to the
            user. It supports different variants and can include icons and
            additional elements like titles and descriptions.
          </p>
        </div>

        <div id="default-alert">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Default Alert
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              A standard alert to notify the user about general information.
            </p>
          </div>
          <Alert>
            <Icons.Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>

        <div id="destructive-alert">
          <div className="mb-3">
            <h2 className="text-medium font-semibold leading-9">
              Alert Variants{" "}
            </h2>
            <hr />
            <p className="leading-9 text-sm">
              An alert to show error or destructive actions, such as session
              expiration.
            </p>
          </div>
          <Alert variant="destructive">
            <Icons.AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
