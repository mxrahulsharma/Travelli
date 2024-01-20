'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { location } from "@/context";
import { FormControl } from "../ui/form";

export function LocationSelect({ field }: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      </FormControl>
      <SelectContent className="max-w-60 md:max-w-max">
        {location.map((place) => (
          <SelectGroup key={place.id}>
            {/* <SelectLabel>{place.state}</SelectLabel> */}
            <SelectItem className="pl-10" value={place.id}>
              {place.name}
            </SelectItem>
            <p className="pl-10 text-sm text-gray-800 font-light">
              {place.description}
            </p>
            <SelectSeparator />
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

