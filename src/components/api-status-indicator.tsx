"use client";

import { useApiStatusStore } from "@/stores/apiStatusStore";
import { Badge } from "./ui/badge";

export default function ApiStatusIndicatior() {
  const status = useApiStatusStore((state) => state.status);

  if (status === "live") {
    return (
      <Badge variant="secondary" className="hover:cursor-default font-sans">
        API: Live
      </Badge>
    );
  }
  return (
    <Badge variant="destructive" className="hover:cursor-default font-sans">
      API: Mock
    </Badge>
  );
}
