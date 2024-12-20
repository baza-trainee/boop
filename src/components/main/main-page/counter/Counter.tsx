import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useGetAllNumbersQuery } from "@/store/api/counterApi";
import SectionTitle from "../../shared/SectionTitle";
import CounterItem from "./counter-item/CounterItem";

const DynamicCounterItem = dynamic(() => import("./counter-item/CounterItem"), {
  ssr: false,
});


const Counter = () => {
  const t = useTranslations("Counter_section");
  const { data: counterItems, isFetching, isError } = useGetAllNumbersQuery();

  return (
    <section className="mb-[120px]">
      <div className="container mx-auto">
        <SectionTitle
          title={t("title")}
          className="[&>svg]:hidden sm:[&>svg]:block"
        />
      </div>
      <div className="mt-8 py-[30px] sm:bg-beige sm:py-[75px]">
        {isError && <p className="container">Something went wrong!</p>}
        {!isFetching && counterItems && (
          <ul className="container mx-auto flex flex-col flex-wrap custom:flex-row custom:justify-center custom:gap-10 ml:justify-between ml:gap-[18px] [&>*:nth-child(n+2):nth-child(-n+4)]:text-yellow">
            {counterItems?.map(({ id, number, text, variant }) => (
              <DynamicCounterItem
                key={id}
                number={number}
                text={t(text, {
                  count: number,
                  ordinal: true,
                })}
                variant={variant}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Counter;