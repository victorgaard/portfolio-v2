import { Typography } from "./Typography";

function Hero() {
  return (
    <div className="flex flex-col gap-1.5">
      <Typography.H2 className="font-bold tracking-tight">
        Victor F. Santos
      </Typography.H2>
      <Typography.H5 className="font-medium tracking-tight">
        Frontend Engineer
      </Typography.H5>
      <Typography.Paragraph className="max-w-xs [text-wrap:balance]">
        Building things to look cool as shit and who knows where it goes?
      </Typography.Paragraph>
    </div>
  );
}

export default Hero;
