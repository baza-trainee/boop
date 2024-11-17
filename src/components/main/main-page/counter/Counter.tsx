import { useTranslations } from "next-intl";
import { useGetAllNumbersQuery } from "@/store/api/counterApi";
import SectionTitle from "../../shared/SectionTitle";
import CounterItem from "./counter-item/CounterItem";

const Counter = () => {
  const t = useTranslations("Counter_section");
  const { data: counterItems, isFetching, isError } = useGetAllNumbersQuery();

  return (
    <section className="mb-[120px]" aria-labelledby="counter-section-title">
      <header className="container mx-auto">
        <SectionTitle
          id="counter-section-title"
          title={t("title")}
          className="[&>svg]:hidden sm:[&>svg]:block"
        />
      </header>
      <div
        className="mt-8 py-[30px] sm:bg-beige sm:py-[75px]"
        aria-live="polite"
        aria-busy={isFetching}
      >
        {isError && (
          <div className="container" role="alert">
            <p>Something went wrong!</p>
          </div>
        )}
        {!isFetching && counterItems && (
          <ul
            className="container mx-auto flex flex-col flex-wrap custom:flex-row custom:justify-center custom:gap-10 ml:justify-between ml:gap-[18px] [&>*:nth-child(n+2):nth-child(-n+4)]:text-yellow"
            role="list"
          >
            {counterItems?.map(({ id, number, text, variant }) => (
              <li key={id} className="counter-item">
                <CounterItem
                  number={number}
                  text={t(text, {
                    count: number,
                    ordinal: true,
                  })}
                  variant={variant}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Counter;
