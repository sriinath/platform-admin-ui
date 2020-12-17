import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Header } from '../Header';
import { SideBar } from '../SideBar';
import {
    Dashboard,
    NotFound,
    ServiceList,
    QueueService
} from '../../pages';
import {
    LeftContainerEl,
    RightContainerEl,
    MainContainerEl
} from './styled.jsx';
// import { history } from '../../store';

const MainLayout = () => {
    return <MainContainerEl>
        <LeftContainerEl>
            <SideBar />
        </LeftContainerEl>
        <RightContainerEl>
            <Header />
            <Switch>
                <Route exact path="/home" component={Dashboard} />
                <Route exact path="/:serviceName" component={ServiceList} />
                <Route exact path="/queue/create" component={QueueService} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </RightContainerEl>
    </MainContainerEl>
}

export { MainLayout }
