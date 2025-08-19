import { useLocation, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons";
import styles from './BackButton.module.scss';

interface BackButtonProps {
  onClick?: () => void;
  debug?: boolean; // Optional: für Debugging
}

export default function BackButton({ onClick, debug = false }: BackButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // Pathname normalisieren (falls trailing slash vorhanden)
  const normalizedPath = location.pathname.replace(/\/$/, '');
  const pathSegments = normalizedPath.split("/").filter(Boolean);

  // Debug-Ausgabe (kann in Produktion entfernt werden)
  if (debug) {
    console.log("BackButton Debug:", {
      originalPath: location.pathname,
      normalizedPath,
      pathSegments,
      firstSegment: pathSegments[0],
      segmentLength: pathSegments.length
    });
  }

  // Button nur auf Unterseiten von /projekte/* oder /fallstudien/* anzeigen
  const isProjectSubpage = 
    pathSegments.length === 2 && 
    pathSegments[0] === "projekte";
    
  const isCaseStudySubpage = 
    pathSegments.length === 2 && 
    pathSegments[0] === "fallstudien";

  const showButton = isProjectSubpage || isCaseStudySubpage;

  if (!showButton) return null;

  // Parent-Path bestimmen
  const parentPath = `/${pathSegments[0]}`;

  const handleClick = () => {
    if (debug) {
      console.log("Navigating to:", parentPath);
    }
    navigate(parentPath);
    if (onClick) onClick();
  };

  return (
    <button 
      onClick={handleClick} 
      className={styles.backbutton}
      aria-label={`Zurück zu ${pathSegments[0] === 'projekte' ? 'Projekte' : 'Fallstudien'}`}
    >
      <BackIcon />
    </button>
  );
}