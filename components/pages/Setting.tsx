import { FC } from 'react'
import SettingsForm from '../forms/SettingsForm'
import { Locale } from "@/i18n-config";

interface SettingProps {
    lang: Locale;
    dictionary: any;
}

const Setting: FC<SettingProps> = ({lang, dictionary}) => {
  return (
    <div className="flex-col justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
        <SettingsForm lang={lang} dictionary={dictionary} />
  </div>
  )
}

export default Setting