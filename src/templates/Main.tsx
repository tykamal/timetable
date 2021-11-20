import { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}

    <div className="max-w-3/4 md:max-w-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-l md:text-xl whitespace-nowrap">
            {AppConfig.description}
          </div>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered by{' '}
        <a title="We are offline at the moment!">Grumeti Media</a>
      </div>
    </div>
  </div>
);

export { Main };
