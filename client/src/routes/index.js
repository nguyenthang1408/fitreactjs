import config from '../config';
import Content from '../pages/Content';
import AEC from '../pages/AEC';
import TSC from '../pages/TSC';
import APS from '../pages/APS';
import User from '../pages/user';
import Attendance from '../pages/attendance';
import Salary from '../pages/salary';
import Language from '../pages/language';
import Logout from '../pages/logout';
import AECID from '../pages/AECID';
import SalaryLine from '../pages/SalaryLine';
import SalaryLinePhase from '../pages/SalaryLinePhase';
import ProjectSum from '../pages/ProjectSum';
import ProjectLoading from '../pages/ProjectLoading';
import ProjectDone from '../pages/ProjectDone';
import ProjectEfficiency from '../pages/ProjectEfficiency';

const publicRouter = [
    { path: config.home, component: Content },
    { path: config.aec, component: AEC },
    { path: config.tsc, component: TSC },
    { path: config.aps, component: APS },
    { path: config.user, component: User },
    { path: config.attendance, component: Attendance },
    { path: config.salary, component: Salary },
    { path: config.language, component: Language },
    { path: config.logout, component: Logout },
    { path: config.aecId, component: AECID },
    { path: config.tscId, component: AECID },
    { path: config.apsId, component: AECID },
    { path: config.salaryLine, component: SalaryLine },
    { path: config.salaryLinePhase, component: SalaryLinePhase },
    { path: config.sum, component: ProjectSum },
    { path: config.loading, component: ProjectLoading },
    { path: config.done, component: ProjectDone },
    { path: config.efficiency, component: ProjectEfficiency },
];

export default publicRouter;
