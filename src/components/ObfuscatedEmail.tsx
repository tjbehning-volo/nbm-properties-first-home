import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  className?: string;
}

const ObfuscatedEmail = ({ className }: ObfuscatedEmailProps) => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Decode email on client-side to prevent bot scraping
    const parts = ['info', 'nbmhomes', 'com'];
    setEmail(`${parts[0]}@${parts[1]}.${parts[2]}`);
  }, []);

  if (!email) return <span className={className}>Loading...</span>;

  return (
    <a 
      href={`mailto:${email}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
      }}
    >
      {email}
    </a>
  );
};

export default ObfuscatedEmail;
