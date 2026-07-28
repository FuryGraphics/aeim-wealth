import { useEffect } from "react";

/**
 * LeadConnector chat widget.
 * Loads the loader.js script once on mount so the chat widget
 * appears on every page.
 */
export default function ChatWidget() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[data-widget-id="6a646ad5c4dda61f3f9d01f7"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "6a646ad5c4dda61f3f9d01f7");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
