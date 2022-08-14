import React from 'react';
import PageContainer from '@/Layouts/PageContainer';

interface Props {
  status: number;
}

const ErrorPage = ({ status }: Props) => {
  const title = {
    503: '503 Service Unavailable',
    500: '500 Server Error',
    404: '404 Page Not Found',
    403: '403 Forbidden',
  }[status];

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status];

  return (
    <div className="w-full flex flex-col gap-8 px-8 items-center mt-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Error',
  body: { component: ErrorPage },
});
