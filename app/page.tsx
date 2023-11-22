import { Typography } from "./components/Typograph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <Typography.H1 className="text-blue-300">Hello</Typography.H1>
        <Typography.Paragraph>Hello</Typography.Paragraph>
      </div>
    </main>
  );
}
