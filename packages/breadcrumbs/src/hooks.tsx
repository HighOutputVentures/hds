import { IBreadCrumbLinks } from './Breadcrumbs';

type useTransformBreadCrumbInfoArgs = {
  start: number;

  maxLinkControls?: 6 | 4 | 2 | 'all';
  originalBreadCrumbDaTa: IBreadCrumbLinks['typedef'];
};

type useTransformBreadCrumbInfoReturn = {
  transformedBreadCrumbData: IBreadCrumbLinks['typedef'] | null;
};

export function useTransformBreadCrumbInfo({
  start,

  originalBreadCrumbDaTa,
  maxLinkControls = 'all',
}: useTransformBreadCrumbInfoArgs): useTransformBreadCrumbInfoReturn {
  const size = originalBreadCrumbDaTa.length;

  const transformedBreadCrumbData: IBreadCrumbLinks['typedef'] =
    maxLinkControls !== 'all'
      ? start + maxLinkControls < size
        ? [
            start >= 1 ? null : undefined,
            ...new Array(maxLinkControls / 2)
              .fill(null)
              .map((_, i) => originalBreadCrumbDaTa[start + i]),
            null,
            ...new Array(maxLinkControls / 2)
              .fill(null)
              .map((_, i) => originalBreadCrumbDaTa[size - 1 - i])
              .reverse(),
          ]
        : [
            null,
            ...new Array(maxLinkControls)
              .fill(null)
              .map((_, i) => originalBreadCrumbDaTa[size - 1 - i])
              .reverse(),
          ]
      : originalBreadCrumbDaTa;

  return {
    transformedBreadCrumbData,
  };
}
