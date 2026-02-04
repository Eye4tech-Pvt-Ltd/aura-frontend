export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        PROFILE: "/user/profile",
    },
    AGENT: {
      LIST: "/agents",
      DETAIL: (id: string) => `/agents/${id}`,
      CREATE: "/agents/create",
      UPDATE: (id: string) => `/agents/${id}/update`,
      DELETE: (id: string) => `/agents/${id}/delete`,
    },
  
    ANALYTICS: {
      OVERVIEW: "/analytics/overview",
      REPORTS: "/analytics/reports",
    },
  
    BILLING: {
      PLANS: "/billing/plans",
      SUBSCRIPTION: "/billing/subscription",
      INVOICES: "/billing/invoices",
    },
  
    CALLS: {
      LIST: "/calls",
      LOGS: "/calls/logs",
      START: "/calls/start",
    },
  
    FLOWS: {
      LIST: "/flows",
      CREATE: "/flows/create",
      UPDATE: (id: string) => `/flows/${id}`,
    },
  
    INTEGRATIONS: {
      LIST: "/integrations",
      CONNECT: "/integrations/connect",
      DISCONNECT: (id: string) => `/integrations/${id}/disconnect`,
    },
  
    KNOWLEDGE: {
      ARTICLES: "/knowledge/articles",
      UPLOAD: "/knowledge/upload",
    },
  
    NUMBERS: {
      LIST: "/numbers",
      BUY: "/numbers/buy",
      RELEASE: (id: string) => `/numbers/${id}/release`,
    },
  
    SETTINGS: {
      PROFILE: "/settings/profile",
      UPDATE_PROFILE: "/settings/profile/update",
    },
  
    TEAM: {
      MEMBERS: "/team/members",
      INVITE: "/team/invite",
      REMOVE: (id: string) => `/team/${id}/remove`,
    },
  }
  