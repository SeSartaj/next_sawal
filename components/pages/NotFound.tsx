import { FC } from 'react'
import { Locale } from "@/i18n-config";
import PageHeader from "@/ui/PageHeader";
interface NotFoundProps {
    lang: Locale;
    dictionary: any;
}

const NotFound: FC<NotFoundProps> = ({ lang, dictionary }) => {
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <PageHeader title="Not Found" size={"sm"} />
        </div>
      </div>
    </div>
  )
}

export default NotFound
