import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

//:::::::::::::::::::::::::::::::::::::::: Layouts ::::::::::::::::::::::::::::::::::::::::::

const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts/FullLayout')));

// :::::::::::::::::::::::::::::::::::::::: Pages :::::::::::::::::::::::::::::::::::::::::::

//UI GUIDE
const LayoutGuide = Loadable(lazy(() => import('../pages/ui-guide/LayoutGuide')));
const CssGuide = Loadable(lazy(() => import('../pages/ui-guide/CssGuide')));
const ButtonGuide = Loadable(lazy(() => import('../pages/ui-guide/ButtonGuide')));
const InputGuide = Loadable(lazy(() => import('../pages/ui-guide/InputGuide')));
const SelectGuide = Loadable(lazy(() => import('../pages/ui-guide/SelectGuide')));
const PopupGuide = Loadable(lazy(() => import('../pages/ui-guide/PopupGuide')));
const TableListGuide = Loadable(lazy(() => import('../pages/ui-guide/TableListGuide')));
const TableViewGuide = Loadable(lazy(() => import('../pages/ui-guide/TableViewGuide')));
const ChartGuide = Loadable(lazy(() => import('../pages/ui-guide/ChartGuide')));
const UploadGuide = Loadable(lazy(() => import('../pages/ui-guide/UploadGuide')));
const NoDataGuide = Loadable(lazy(() => import('../pages/ui-guide/NoDataGuide')));
const ExcelGuide = Loadable(lazy(() => import('../pages/ui-guide/ExcelGuide')));
const CheckboxGuide = Loadable(lazy(() => import('../pages/ui-guide/CheckboxGuide')));
const DatePickerGuide = Loadable(lazy(() => import('../pages/ui-guide/DatePickerGuide')));
const InfoGuide = Loadable(lazy(() => import('../pages/ui-guide/InfoGuide')));
const LabelGuide = Loadable(lazy(() => import('../pages/ui-guide/LabelGuide')));
const RadioGuide = Loadable(lazy(() => import('../pages/ui-guide/RadioGuide')));
const TabGuide = Loadable(lazy(() => import('../pages/ui-guide/TabGuide')));
const ToggleGuide = Loadable(lazy(() => import('../pages/ui-guide/ToggleGuide')));

const Error = Loadable(lazy(() => import('../pages/auth/Error')));

// Routes ================================================================
const adminRoutes = [
  {
    path: '/',
    element: <Navigate to='/ui/css' />,
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { 
        path: 'ui',
        name: 'UI guide', 
        children: [
          {
            path: 'css', 
            name: 'CSS Guide', 
            element: <CssGuide />,
          },
          {
            path: 'layout', 
            name: 'Layout Guide', 
            element: <LayoutGuide />,
          },
          {
            path: 'button', 
            name: 'Button Guide', 
            element: <ButtonGuide />
          },
          {
            path: 'input', 
            name: 'Input Guide', 
            element: <InputGuide />
          },
          {
            path: 'select', 
            name: 'Select Guide', 
            element: <SelectGuide />
          },
          {
            path: 'popup', 
            name: 'Popup Guide', 
            element: <PopupGuide />
          },
          {
            path: 'table-view/:id', 
            name: 'Table View Guide', 
            element: <TableViewGuide />
          },
          {
            path: 'table-list', 
            name: 'Table List Guide', 
            element: <TableListGuide />
          },
          {
            path: 'excel', 
            name: 'Excel Import/Export', 
            element: <ExcelGuide />
          },
          {
            path: 'radio', 
            name: 'Radio Guide', 
            element: <RadioGuide />
          },
          {
            path: 'check', 
            name: 'Checkbox Guide', 
            element: <CheckboxGuide />
          },
          {
            path: 'datepicker', 
            name: 'DatePicker Guide', 
            element: <DatePickerGuide />
          },
          {
            path: 'info', 
            name: 'Info Guide', 
            element: <InfoGuide />
          },
          {
            path: 'label', 
            name: 'Label Guide', 
            element: <LabelGuide />
          },
          {
            path: 'tab', 
            name: 'Tab Guide', 
            element: <TabGuide />
          },
          {
            path: 'toggle', 
            name: 'Toggle Guide', 
            element: <ToggleGuide />
          },
          {
            path: 'chart', 
            name: 'Chart Guide', 
            element: <ChartGuide />
          },
          {
            path: 'upload', 
            name: 'Upload Guide', 
            element: <UploadGuide />
          },
          {
            path: 'nodata', 
            name: 'NoData Guide', 
            element: <NoDataGuide />
          },
        ]
      },
    ]
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
    ],
  },
  { path: '*', element: <Navigate to="/auth/404" /> },
];

export default adminRoutes;