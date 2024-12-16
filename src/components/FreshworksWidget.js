import { useEffect } from "react";

const FreshworksWidget = () => {
  useEffect(() => {
    window.fwSettings = {
      widget_id: 1070000002216,
    };
    (function () {
      if (typeof window.FreshworksWidget !== "function") {
        var n = function () {
          n.q.push(arguments);
        };
        n.q = [];
        window.FreshworksWidget = n;
      }
    })();

    const script = document.createElement("script");
    script.src = "https://ind-widget.freshworks.com/widgets/1070000002216.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default FreshworksWidget;
