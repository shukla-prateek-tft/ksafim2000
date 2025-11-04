import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./MultiLevelDropdown.scss";
import arrow_left from '../../assets/arrow_left.png';
import { useAuth } from "@/hooks";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}


interface MultiLevelDropdownProps {
  items: MenuItem[];
  closeOnOutsideClick?: boolean;
}

type DIProps = {
  item: MenuItem;
  path: string;
  activePath: string;
  setActivePath: React.Dispatch<React.SetStateAction<string>>;
  uiScale: string; 
};

const MultiLevelDropdown: React.FC<MultiLevelDropdownProps> = ({
  items,
  closeOnOutsideClick = false,
}) => {
  const [activePath, setActivePath] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isMunicipality } = useAuth();
  const uiScale = isMunicipality ? 'primary' : 'secondary';
  
  useEffect(() => {
    if (!closeOnOutsideClick) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
    
      if (containerRef.current && containerRef.current.contains(target)) {
        return;
      }
      
      const clickedSubmenu = (target as Element).closest?.('.multi-dropdown-submenu-container');
      if (clickedSubmenu) {
        return;
      }
      
      setActivePath("");
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnOutsideClick]);

  return (
    <div className={`multi-dropdown-container scale-${uiScale}`} ref={containerRef}>
      <ul className="multi-dropdown">
        {items.map((item, idx) => (
          <DropdownItem
            key={idx}
            item={item}
            path={`${idx}`}
            activePath={activePath}
            setActivePath={setActivePath}
            uiScale={uiScale} 
          />
        ))}
      </ul>
    </div>
  );
};

const DropdownItem: React.FC<DIProps> = ({
  item,
  path,
  activePath,
  setActivePath,
  uiScale,
}) => {
  const hasChildren = !!(item.children && item.children.length > 0);
  const labelRef = useRef<HTMLDivElement>(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, right: 0 });

  const branchOpen = activePath === path || activePath.startsWith(path + "-");

  useEffect(() => {
    if (branchOpen && hasChildren && labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      
      setSubmenuPosition({
        top: rect.top,
        right: window.innerWidth - rect.left + 5 
      });
    }
  }, [branchOpen, hasChildren]);

  function onLabelClick() {
    if (!hasChildren) {
      setActivePath(path);
      return;
    }
    setActivePath((prev: string) => {
      if (prev === path) {
        return "";
      } else {
        return path;
      }
    });
  }

  return (
    <>
      <li className="multi-dropdown__item" data-path={path}>
        <div
          ref={labelRef}
          className={`multi-dropdown__label ${hasChildren ? "has-children" : ""} ${
            activePath === path || activePath.startsWith(path + "-") ? "active" : ""
          }`}
          onClick={onLabelClick}
        >
          {hasChildren && (
            <span className="arrow">
              <img src={arrow_left} alt="Arrow Left" />
            </span>
          )}
          <span className="multi-dropdown__text">{item.label}</span>
        </div>
      </li>

      {hasChildren && branchOpen && createPortal(
        <div
          className={`multi-dropdown-submenu-container scale-${uiScale}`} 
          style={{
            position: 'fixed',
            top: `${submenuPosition.top}px`,
            right: `${submenuPosition.right}px`,
            zIndex: 2000 + path.split("-").length * 10
          }}
        >
          <ul className="multi-dropdown__submenu">
            {item.children!.map((child, idx) => (
              <DropdownItem
                key={idx}
                item={child}
                path={`${path}-${idx}`}
                activePath={activePath}
                setActivePath={setActivePath}
                uiScale={uiScale} 
              />
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
};

export default MultiLevelDropdown;