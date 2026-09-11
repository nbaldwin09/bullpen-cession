import { Search } from "lucide-react";
import { type FormEvent, useState } from "react";

export function SearchField({
  value,
  onChange,
  onSubmit,
  autoFocus,
  size = "md",
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (q: string) => void;
  autoFocus?: boolean;
  size?: "md" | "lg";
}) {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value.trim());
  };
  return (
    <form onSubmit={submit} className="w-full">
      <label className="bc-search-wrap">
        <Search size={size === "lg" ? 18 : 16} />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for Anything"
          aria-label="Search"
          autoFocus={autoFocus}
          className="bc-search"
        />
      </label>
    </form>
  );
}

export function useSearchDraft(initial = "") {
  const [value, setValue] = useState(initial);
  return { value, setValue };
}
