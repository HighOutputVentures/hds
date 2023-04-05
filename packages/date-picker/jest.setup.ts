import "@testing-library/jest-dom/extend-expect";
import {
  mockIntersectionObserver,
  mockResizeObserver,
} from "jsdom-testing-mocks";

mockResizeObserver();
mockIntersectionObserver();
