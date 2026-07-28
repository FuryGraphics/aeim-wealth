import { useEffect, useRef } from "react";

/**
 * Caseclimb inline form embed.
 * Loads the form_embed.js script after the iframe mounts so the
 * widget initializes correctly.
 */
export default function CaseclimbForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any previously loaded script to avoid duplicates
    const existing = document.querySelector(
      'script[src="https://services.caseclimb.com/js/form_embed.js"]'
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://services.caseclimb.com/js/form_embed.js";
    script.async = true;
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        src="https://services.caseclimb.com/widget/form/dAFMXVEc073X8iXDn7We"
        style={{ width: "100%", height: "541px", border: "none", borderRadius: "10px" }}
        id="inline-dAFMXVEc073X8iXDn7We"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form (AEIM Wealth Management)"
        data-height="541"
        data-layout-iframe-id="inline-dAFMXVEc073X8iXDn7We"
        data-form-id="dAFMXVEc073X8iXDn7We"
        title="Website Form (AEIM Wealth Management)"
      />
    </div>
  );
}
