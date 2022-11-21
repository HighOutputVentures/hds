import { findClosestBreakpoint, omit, pick } from "./utils";

describe("utils", () => {
  describe("omit", () => {
    it("Should omit props by keys (0)", () => {
      const subject = {
        Aa: 1,
        Bb: 2,
        Cc: 3,
        Dd: 4,
        Ee: 5,
      };

      expect(omit(subject, "Aa", "Bb", "Cc")).toStrictEqual(
        expect.objectContaining({
          Dd: 4,
          Ee: 5,
        }),
      );
    });

    it("Should omit props by keys (1)", () => {
      expect(omit({ Aa: 1 }, "Aa")).toStrictEqual(expect.objectContaining({}));
    });
  });

  describe("pick", () => {
    it("Should pick props by keys", () => {
      const picked = pick({ Aa: 1, Bb: 2, Cc: 3, Dd: 4, Ee: 5 }, "Aa", "Bb", "Cc");

      expect(picked).toEqual(
        expect.objectContaining({
          Aa: 1,
          Bb: 2,
          Cc: 3,
        }),
      );
    });
  });

  describe("findClosestBreakpoint", () => {
    it("Should return closest breakpoint", () => {
      const breakpoint = findClosestBreakpoint(["base", "sm", "lg"], "md");
      expect(breakpoint).toBe("sm");
    });
  });
});
