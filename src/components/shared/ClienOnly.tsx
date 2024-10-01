import { useEffect, useState } from "react";

const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Chỉ kích hoạt khi client-side rendering
  }, []);

  if (!isClient) {
    return null; // Trả về null khi SSR
  }

  return <>{children}</>;
};

export default ClientOnly;
