import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
// import { theme } from "../component/theme/index";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {["mamad", "samad", "ahmad", "amat"].map((param) => {
        return (
          <Button
            color="info"
            variant="text"
            key={param}
            onClick={() => router.push(`./mamad/${[param]}`)}
          >
            {param}
          </Button>
        );
      })}
    </div>
  );
}
