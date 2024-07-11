import clsx from "clsx";
import { BeatLoader } from "react-spinners";

import useBreakpoint from "@hooks/useBreakpoint";

import Header from "@components/Header";
import MobileNavigator from "@components/MobileNavigator";
import SEO from "@components/SEO";
import Text from "@components/Text";

import styles from "./Layout.module.scss";
import Footer from "@components/Footer";
import { useCallback, useEffect } from "react";

import { useRouter } from "next/router";
import useAppstore, { StoreState } from "@store/useAppstore";

const Layout: React.FC<LayoutProps> = (props) => {
  const router = useRouter();
  const {
    children,
    classes,
    loading,
    indexing,
    metaTitle,
    metaDescription,
    metaImage,
    schemaSEO,
    removeHeader,
    isPublic,
    removeFooter,
    disableFooter,
    disabled,
  } = props;

  const setLoginModal = useAppstore((state: StoreState) => state.setLoginModal);

  const handleSignupModal = useCallback(() => {
    setLoginModal(true);
  }, [setLoginModal]);

  useEffect(() => {
    const uri = decodeURIComponent(router?.query?.uri as string);
    if (uri && uri !== "undefined") {
      handleSignupModal();
    }
  }, [router, handleSignupModal]);

  const isTab = useBreakpoint({ max: "md" });

  return (
    <div className={clsx(styles.root, classes?.root)} data-testid="layout">
      <SEO
        noindex={!indexing}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        schemaSEO={schemaSEO}
      />

      {!removeHeader && (
        <div className={styles.showDesktop}>
          <Header />
        </div>
      )}

      <main className={clsx(styles.main, classes?.main)}>
        {loading ? (
          <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-4">
            <BeatLoader color="#965609" />
            <Text size="xs" color="primary-color" align="center" className="translate-x-2">
              Loading...
            </Text>
          </div>
        ) : (
          children
        )}
      </main>
      {!removeFooter && <Footer disabled={disableFooter || disabled} className={classes?.footer} />}
      {!removeHeader && (
        <div className={styles.showMobile}>
          <MobileNavigator />
        </div>
      )}
    </div>
  );
};

type LayoutProps = React.PropsWithChildren<{
  classes?: { root?: string; main?: string; footer?: string };
  loading?: boolean;
  indexing?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  schemaSEO?: string;
  removeHeader?: boolean;
  isPublic?: boolean;
  removeFooter?: boolean;
  disableFooter?: boolean;
  disabled?: boolean;
}>;

export default Layout;
