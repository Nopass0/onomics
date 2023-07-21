import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import { HomePage } from './HomePage'
import { CatalogPage } from './CatalogPage'
import { CommunityPage } from './CommunityPage'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { ComicEditPage } from './ComicsEditPage';
import { ProfileEditPage } from './ProfileEditPage';

export function Content() {

    return (
        <>
        <div className="h-6 mt-[30px] hidden sm:block"><br/></div>
            <div className="w-full">
                <main className='w-auto flex-grow h-full my-2 box-border pb-24 overflow-x-hidden'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='catalog' element={<CatalogPage />} />
                        <Route path='community' element={<CommunityPage />} />
                        <Route path='signin' element={<SignInPage />} />
                        <Route path='signup' element={<SignUpPage />} />
                        <Route path='comicseditpage' element={<ComicEditPage />} />
                        <Route path='profileeditpage' element={<ProfileEditPage />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}