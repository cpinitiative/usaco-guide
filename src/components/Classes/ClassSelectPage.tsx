import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../seo';
import Layout from '../layout';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useContext } from 'react';
import { navigate } from 'gatsby';
export default function ClassSelectPage(props: { path: string }) {
  const { userClasses } = useContext(UserDataContext);
  React.useEffect(() => {
    if (userClasses.length === 1) {
      navigate(`/class/${userClasses[0].id}`, { replace: true });
    }
  }, [userClasses]);
  return (
    <>
      <Layout>
        <TopNavigationBar />
        <SEO title={'Classes'} />
        <div className="px-10 pt-6">
          <h1 className="text-3xl font-bold leading-9">My Classes</h1>
          {userClasses && userClasses.length === 0 && (
            <p>You aren't in any classes</p>
          )}
          <ul className={'pt-4'}>
            {userClasses &&
              userClasses.map(registeredClass => (
                <li>
                  <Link
                    key={registeredClass.id}
                    to={`/class/${registeredClass.id}`}
                    className={'text-blue-600 hover:underline'}
                  >
                    {registeredClass.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
