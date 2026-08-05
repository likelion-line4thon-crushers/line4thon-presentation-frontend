import { useEffect } from "react";
import { useMatches } from "react-router";

export interface RouteMetaHandle {
  title: string;
  noindex?: boolean;
}

/**
 * 라우트 handle 의 메타데이터를 문서에 반영한다. 모든 라우트가 handle.title 을 가져야 한다 —
 * 빠뜨리면 이전 라우트 제목이 그대로 남는다.
 *
 * ! title 만 document.title 로 직접 쓴다. <title> 로 렌더하면 index.html 의 정적 <title> 과
 *   함께 head 에 2개가 남고(React 는 중복 제거를 안 한다), 공식 문서가 그 상태를
 *   "behavior of browsers and search engines is undefined" 라고 명시한다.
 *   robots 메타는 정적 대응물이 없어 중복이 안 생기므로 호이스팅에 맡긴다.
 */
export default function RouteMeta() {
  const matches = useMatches();
  const handle = [...matches].reverse().find((m) => m.handle)?.handle as
    | RouteMetaHandle
    | undefined;
  const title = handle?.title;

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return handle?.noindex ? <meta name="robots" content="noindex, nofollow" /> : null;
}
