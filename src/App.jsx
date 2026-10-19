import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Page = forwardRef(({ children }, ref) => (
  <div className="page" ref={ref}>
    {children}
  </div>
));
Page.displayName = "Page";

export default function App() {
  return (
    <div className="book-wrap">
      <HTMLFlipBook width={450} height={600} showCover={false}>
        <Page><About /></Page>
        <Page><Skills /></Page>
        <Page><Projects /></Page>
        <Page><Experience /></Page>
        <Page><Contact /></Page>
      </HTMLFlipBook>
    </div>
  );
}