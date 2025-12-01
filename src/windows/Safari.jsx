import WindowControls from '../components/WindowControls'
import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { blogPosts } from '../constants/index.js';
import { ChevronLeft, PanelLeft, ChevronRight, ShieldHalf, SearchIcon, ShareIcon, Plus, CopyIcon, MoveRight } from 'lucide-react';

const Safari = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="safari"></WindowControls>

        <PanelLeft className='ml-10 icon'></PanelLeft>

        <div className='flex items-center gap-1 ml-5'>
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>

        <div className='flex-1 flex-center gap-3'>
            <ShieldHalf className='icon'/>

            <div className='search'>
                <SearchIcon className='icon'/>

                <input type="text" placeholder='Search or enter website name'
                className='flex-1 '/>
            </div>
        </div>
        
        <div className='flex items-center gap-5'>
            <ShareIcon className='icon'/>
            <Plus className='icon'/>
            <CopyIcon className='icon'/>
        </div>
    </div>

    <div className='blog'>
        <h2>My Developer Blog</h2>

        <div className='space-y-8'>
            {blogPosts.map(({ id, image, date, link, title}) => (
               <div key={id} className='blog-post'>
                <div className='col-spand-2'>
                    <img src={image} alt={title}/>
                </div>
                <div className='content'>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        Check out the full post <MoveRight className='icon-hover'/>
                    </a>
                </div>
                </div>
            ))}
        </div>
    </div>
    </>
  ); 
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;