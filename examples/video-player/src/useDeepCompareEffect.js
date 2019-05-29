import { useEffect, useRef } from 'react';
import isEqual from 'lodash-es/isEqual';

function useDeepCompareMemoize(value) {
  const ref = useRef(null);

  if (!isEqual(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffect(callback, dependencies) {
  useEffect(callback, useDeepCompareMemoize(dependencies))
}

export default useDeepCompareEffect;
