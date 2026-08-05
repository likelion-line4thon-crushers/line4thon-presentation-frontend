import { createBrowserRouter } from "react-router";
import App from "./App";
import RouteMeta from "./RouteMeta";
import PresenterRoomGate from "./PresenterRoomGate";
import { LandingPage } from "@/pages/landing";
import { AudienceRoomPage } from "@/pages/audience-room";
import { AiReportPage } from "@/pages/ai-report";
import { RatingPage } from "@/pages/rating";
import { BroadcastScreenPage } from "@/pages/broadcast-screen";

// 랜딩만 공개 색인 대상 — 나머지는 세션 단위 비공개 URL이라 noindex
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        handle: { title: "BOiNi - 청중이 보이니, 발표가 달라진다" },
      },

      // * Presenter flow — 단일 경로. 준비/발표 화면은 세션 상태로 결정 (PresenterRoomGate)
      {
        path: "rooms/new",
        element: <PresenterRoomGate />,
        handle: { title: "발표 준비 | BOiNi", noindex: true },
      },
      {
        path: "rooms/:roomId",
        element: <PresenterRoomGate />,
        handle: { title: "발표 | BOiNi", noindex: true },
      },
      {
        path: "rooms/:roomId/report",
        element: <AiReportPage />,
        handle: { title: "AI 리포트 | BOiNi", noindex: true },
      },

      // * Audience flow
      {
        path: "join/:code",
        element: <AudienceRoomPage />,
        handle: { title: "발표 참여 | BOiNi", noindex: true },
      },
      {
        path: "audience/:code/rating",
        element: <RatingPage />,
        handle: { title: "발표 피드백 | BOiNi", noindex: true },
      },
    ],
  },

  // * Projector view — bare fullscreen slide mirror on an external display.
  //   Rendered outside App so no header/chrome appears on the giant screen.
  //   App 밖이라 RouteMeta 를 여기서 직접 건다.
  {
    path: "rooms/:roomId/broadcast",
    element: (
      <>
        <RouteMeta />
        <BroadcastScreenPage />
      </>
    ),
    handle: { title: "발표 화면 | BOiNi", noindex: true },
  },
]);

export default router;
