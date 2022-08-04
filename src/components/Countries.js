import { useEffect, useState } from "react";
import { CountriesList } from "./Countries/CountriesList";
import { Button } from "./utils/Button";
import { Message } from "./utils/Message";

export function Countries({ countries, error, isLoaded, updateCountry, mode }) {
  const postPerSearch = 8;
  const [postNum, setPostNum] = useState(postPerSearch);
  const increasePostNum = () => {
    setPostNum(postNum + postPerSearch);
  };

  useEffect(() => {
    setPostNum(postPerSearch);
  }, [countries]);

  if (error) {
    return <Message content={`Error: ${error.message}`} />;
  }

  if (!isLoaded) {
    return <Message content="Loading..." />;
  }

  if (countries.length === 0) {
    return <Message content="I found...nothing!!" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 mt-8">
      <CountriesList
        countries={countries}
        updateCountry={updateCountry}
        maxCountries={postNum}
        mode={mode}
      />
      <div className="col-span-full justify-self-center">
        <Button action={increasePostNum} value="View more" mode={mode} />
      </div>
    </div>
  );
}
