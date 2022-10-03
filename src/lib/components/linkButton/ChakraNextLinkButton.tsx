import { Button } from "@chakra-ui/react";
import Link from "next/link";

type ChakraNextLinkButtonProps = {
  href: string;
  variant: string;
  children: React.ReactNode;
};

export default function ChakraNextLinkButton({
  href,
  variant,
  children,
  ...props
}: ChakraNextLinkButtonProps) {
  return (
    <Link href={href} passHref>
      <Button as="a" variant={variant} {...props}>
        {children}
      </Button>
    </Link>
  );
}
