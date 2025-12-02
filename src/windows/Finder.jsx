import { SearchIcon } from 'lucide-react';
import WindowControls from '../components/WindowControls';
import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper';
import useLocationStore from '../store/location.js';
import { locations } from '../constants/index.js';
import useWindowStore from '../store/window.js';
import clsx from 'clsx';

const Finder = () => {

    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow('resume');
        if (item.kind === "folder") return setActiveLocation(item);
        if (item.fileType === "txt") return openWindow('txtfile', item);
        if (item.fileType === "img") return openWindow('imgfile', item);

        if (["fig", "url"].includes(item.fileType) && item.href) {
            window.open(item.href, '_blank');
           
            openWindow(`${item.fileType}${item.kind}`, item);
        }
    };

    const renderList = (items) => items.map((item) => (
        <li key={item.id} onClick={() => setActiveLocation(item)}
        className={clsx((item.id === activeLocation?.id) ?'active' : 'not-active')}>
        <img src={item.icon} className='w-4' alt={item.name}/>
        <p className='text-sm font-medium truncate'>{item.name}</p>
        </li>
    ));

  return (
    <>
        <div id="window-header">
            <WindowControls target="finder"></WindowControls>
            <SearchIcon className='icon'/>
        </div>

        <div className='bg-white flex h-full'>
            <div className='sidebar'>
                <div>
                    <h3>Favorites</h3>
                    <ul>
                        {renderList(Object.values(locations))}
                    </ul>
                </div>

                 <div>
                    <h3>Work</h3>
                    <ul>
                        {renderList(locations.work.children)}
                    </ul>
                </div>
            </div>

            <ul className='content'>
            {activeLocation?.children.map((item) => (
                <li
                key={item.id}
                className={item.position}
                onClick={() => openItem(item)}>
                    <img src={item.icon} alt={item.name}/>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
        </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;