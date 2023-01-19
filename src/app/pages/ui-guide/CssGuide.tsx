import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import './ui-guide.css';

const CssGuide: React.FC = () => {

    const freCss = `var(--global-text-color) : #333333;
var(--global-bg-color) : #dfe0e3;
var(--global-disabled-color) : #cccccc;
var(--global-datepicker-input-text-color) : #000000;
var(--global-border-color) : #e6e6e6;
var(--global-placeholder-color) : #888888;
var(--global-link-color) : #145198;
var(--global-text-muted-color) : #e6e6e6;
var(--global-disabled-bg-color) : #ffffff;
var(--global-disabled-icon-color) : #cccccc;

var(--brand-active) : #1d5dc4;
var(--brand-hover) : #1fa4cc;
var(--brand-primary) : #1d5dc4;
var(--brand-secondary) : #f5701c;
var(--brand-brand-gray) : #cccccc;
var(--brand-error) : #e22b2b;    
    `

    const csss = `var(--space-xxl) : 50px;
var(--space-xl) : 30px;
var(--space-lg) : 25px;
var(--space-md) : 20px;
var(--space-smd) : 15px;
var(--space-sm) : 10px;
var(--space-xs) : 8px;
var(--space-xxs) : 4px;
var(--z-index-deepdive) : -1;
var(--z-index-fixed) : 1000;
var(--z-index-header) : 500;
var(--z-index-select) : 400;
var(--z-index-dialog) : 3000;
var(--z-index-loading) : 2100;
var(--z-index-floating) : 2000;
var(--z-index-sticky) : 2000;
var(--form-size-xxl-width) : 100%;
var(--form-size-xxl-height) : 32px;
var(--form-size-xl-width) : 240px;
var(--form-size-xl-height) : 32px;
var(--form-size-lg-width) : 150px;
var(--form-size-lg-height) : 32px;
var(--form-size-md-width) : 110px;
var(--form-size-md-height) : 32px;
var(--form-size-sm-width) : 55px;
var(--form-size-sm-height) : 32px;
var(--form-size-xs-width) : 45px;
var(--form-size-xs-height) : 32px;
var(--button-size-xxl-width) : 100%;
var(--button-size-xxl-height) : 32px;
var(--button-size-xl-width) : 150px;
var(--button-size-xl-height) : 32px;
var(--button-size-xl-text-size) : 13px;
var(--button-size-lg-width) : 100px;
var(--button-size-lg-height) : 32px;
var(--button-size-lg-text) -size: 13px;
var(--button-size-md-width) : 85px;
var(--button-size-md-height) : 32px;
var(--button-size-md-text-size) : 13px;
var(--button-size-sm-width) : auto;
var(--button-size-sm-height) : 25px;
var(--button-size-sm-text-size) : 11px;
var(--button-size-xs-width) : auto;
var(--button-size-xs-height) : 20px;
var(--button-size-xs-text-size) : 11px;
var(--borderRadius-sm) : 4px;
var(--borderRadius-lg) : 8px;
var(--borderRadius-xl) : 16px;
var(--borderRadius-xxl) : 20px;
var(--space-xxl) : 50px;
var(--space-xl) : 30px;
var(--space-lg) : 25px;
var(--space-md) : 20px;
var(--space-smd) : 15px;
var(--space-sm) : 10px;
var(--space-xs) : 8px;
var(--space-xxs) : 4px;
var(--z-index-deepdive) : -1;
var(--z-index-fixed) : 1000;
var(--z-index-header) : 500;
var(--z-index-select) : 400;
var(--z-index-dialog) : 3000;
var(--z-index-loading) : 2100;
var(--z-index-floating) : 2000;
var(--z-index-sticky) : 2000; 

//색상
var(--devide-line-color) : #e6e6e6;
var(--label-on-text-color) : #4881de;
var(--label-on-background-color) : #ffffff;
var(--label-off-text-color) : #888888;
var(--label-off-background-color) : #ffffff;
var(--alert-text-color) : #737373;
var(--alert-background-color) : #f9f9f9;
var(--on-icon-color) : #145198;
var(--on-text-color) : #ffffff;
var(--on-background-color) : #145198;
var(--on-color) : #145198;
var(--on-border-color) : #4881de;
var(--on-handle-color) : #145198;
var(--off-icon-color) : #145198;
var(--off-background-color) : #ffffff;
var(--off-text-color) : #000000;
var(--off-border-color) : #bfbfbf;
var(--off-handle-color) : #ffffff;
var(--hover-background-color) : #e6e6e6;
var(--hover-text-color) : #1c8fca;
var(--hover-color) : #1c8fca;
var(--sum-background-color) : #e2e2e2;
var(--header-text-color) : #000000;
var(--header-background-color) : #ffffff;
var(--list-border-color) : #dfdfdf;
var(--list-hover-background-color) : #f7f7f7;
var(--list-header-text-color) : #145198;
var(--list-header-background-color) : #f8fdff;
var(--infobox-icon-color) : #cdcccc;
var(--infobox-text-color) : #737373;
var(--chart-color-1) : #569fe5;
var(--chart-color-2) : #6dbebf;
var(--chart-color-3) : #f48297;
var(--chart-color-4) : #f7cf6a;
var(--chart-color-5) : #f2a353;
var(--tag-color-1) : #4aa9fc;
var(--tag-color-2) : #faa26c;
var(--tag-color-3) : #7e8dfb;
var(--tag-color-4) : #56bc4c;
var(--global-text-color) : #333333;
var(--global-bg-color) : #dfe0e3;
var(--global-disabled-color) : #cccccc;
var(--global-datepicker-input-text-color) : #000000;
var(--global-border-color) : #e6e6e6;
var(--global-placeholder-color) : #888888;
var(--global-link-color) : #145198;
var(--global-text-muted-color) : #e6e6e6;
var(--global-disabled-bg-color) : #ffffff;
var(--global-disabled-icon-color) : #cccccc;
var(--input-text-color) : #000000;
var(--input-placeholder-color) : #888888;
var(--input-border-color) : #cccccc;
var(--input-background-color) : #ffffff;
var(--input-disabled-background-color) : #f4f4f4;
var(--input-default-background-color) : #ffffff;
var(--input-default-placeholder-color) : #667085;
var(--input-default-border-color) : #cccccc;
var(--input-default-arrow-color) : #6677a2;
var(--input-default-text-color) : #11151f;
var(--input-hover-background-color) : #eef1f8;
var(--input-hover-border-color) : #a7b5da;
var(--input-hover-arrow-color) : #445275;
var(--input-hover-text-color) : #445275;
var(--input-selected-background-color) : #eef1f8;
var(--datepicker-input-text-color) : #000000;
var(--datepicker-input-background-color) : #ffffff;
var(--datepicker-input-icon-on) : #1c8fca;
var(--datepicker-input-icon-off) : #696969;
var(--datepicker-calendal-panel-text-color) : #000000;
var(--datepicker-calendal-panel-icon-color) : #696969;
var(--datepicker-calendal-panel-background-color) : #ffffff;
var(--datepicker-calendal-unit-text-color) : #696969;
var(--datepicker-calendal-date-on-text-color) : #ffffff;
var(--datepicker-calendal-date-on-background-color) : #1d5dc4;
var(--datepicker-calendal-date-off-text-color) : #000000;
var(--datepicker-calendal-date-off-background-color) : #ffffff;
var(--disabled-border-color) : #f4f4f4;
var(--disabled-background-color) : #f2f2f2;
var(--disabled-text-color) : #cccccc;
var(--cta-color) : #1d5dc4;
var(--cta-line-color) : #dedede;
var(--brand-active) : #1d5dc4;
var(--brand-hover) : #1fa4cc;
var(--brand-primary) : #1d5dc4;
var(--brand-secondary) : #f5701c;
var(--brand-brand-gray) : #cccccc;
var(--brand-error) : #e22b2b;
var(--skyblue-scale-skyblue50) : #effdff;
var(--skyblue-scale-skyblue100) : #c7f2ff;
var(--skyblue-scale-skyblue200) : #c6edff;
var(--skyblue-scale-skyblue300) : #a8e8fc;
var(--skyblue-scale-skyblue400) : #6cc0e6;
var(--blue-scale-blue50) : #7bf2fb;
var(--blue-scale-blue100) : #64e7f7;
var(--blue-scale-blue200) : #4dd9f2;
var(--blue-scale-blue300) : #37c9ec;
var(--blue-scale-blue400) : #23b7e5;
var(--blue-scale-blue500) : #1c94d2;
var(--blue-scale-blue600) : #1674bd;
var(--blue-scale-blue700) : #1057a8;
var(--blue-scale-blue750) : #0c579e;
var(--blue-scale-blue800) : #0c3d93;
var(--blue-scale-blue900) : #08267c;
var(--gray-scale-gray900) : #1a1a1a;
var(--gray-scale-gray800) : #333333;
var(--gray-scale-gray700) : #4d4d4d;
var(--gray-scale-gray600) : #666666;
var(--gray-scale-gray500) : #808080;
var(--gray-scale-gray400) : #999999;
var(--gray-scale-gray300) : #b3b3b3;
var(--gray-scale-gray200) : #cccccc;
var(--gray-scale-gray100) : #e6e6e6;
var(--gray-scale-gray50) : #f9f9f9;
var(--red-scale-red50) : #ff83a5;
var(--red-scale-red100) : #ff7091;
var(--red-scale-red200) : #fa5e7d;
var(--red-scale-red300) : #f24f69;
var(--red-scale-red400) : #e84157;
var(--red-scale-red500) : #dc3545;
var(--red-scale-red600) : #c42f2b;
var(--red-scale-red700) : #ab3722;
var(--red-scale-red800) : #913b19;
var(--red-scale-red900) : #763b12;
var(--dialog-overay-color) : #00000052;
var(--dialog-background-color) : #ffffff;
var(--card-background-color) : #ffffff;
var(--icon-on-color) : #1d5dc4;
var(--icon-off-color) : #1d5dc4;
var(--pagination-on-text-color) : #333333;
var(--pagination-on-background-color) : #eafaff;
var(--pagination-on-border-color) : #d0d5dd;
var(--pagination-off-background-color) : #ffffff;
var(--pagination-off-text-color) : #667085;
var(--pagination-off-border-color) : #d0d5dd;
var(--pagination-disable-background-color) : #ffffff;
var(--pagination-disable-border-color) : #d0d5dd;
var(--pagination-disable-text-color) : #d0d5dd;
var(--lnb-background-color) : #ffffff;
var(--lnb-main-on-icon-color) : #000000;
var(--lnb-main-on-text-color) : #000000;
var(--lnb-main-on-background-color) : #f9f9f9;
var(--lnb-main-off-icon-color) : #000000;
var(--lnb-main-off-text-color) : #000000;
var(--lnb-main-off-background-color) : #ffffff;
var(--lnb-main-hover-background-color) : #e6e6e6;
var(--lnb-sub-on-icon-color) : #1d5dc4;
var(--lnb-sub-off-icon-color) : #b5b5b5;
var(--lnb-sub-hover-text-color) : #1d5dc4;
var(--table-border-color) : #e6e6e6;
var(--table-icon-color) : #667085;
var(--table-sum-background-color) : #e2e2e2;
var(--table-header-text-color) : #667085;
var(--table-header-background-color) : #f4f4f4;
var(--table-header-border-color) : #eaecf0;
var(--table-deleted-background-color) : #f9f9f9;
var(--table-deleted-text-color) : #b3b3b3;
var(--table-selected-background-color) : #effdff;
var(--table-selected-text-color) : #29b6f6;
var(--select-text-color) : #11151f;
var(--select-border-color) : #cccccc;
var(--select-background-color) : #ffffff;
var(--select-option-border-color) : #cccccc;
var(--select-option-on-text-color) : #11151f;
var(--select-option-on-background-color) : #ffffff;
var(--select-option-on-border-color) : #1656fd;
var(--select-option-off-text-color) : #000000;
var(--select-option-off-background-color) : #ffffff;
var(--select-option-over-background-color) : #e6e6e6;
var(--select-option-out-background-color) : #ffffff;
var(--select-option-background-color) : #ffffff;
var(--select-placeholder-color) : #445275;
var(--select-arrow-color) : #6677a2;
var(--select-over-border-color) : #a7b5da;
var(--select-over-arrow-color) : #445275;
var(--select-over-text-color) : #445275;
var(--select-over-backgroud-color) : #eef1f8;
var(--select-on-border-color) : #1656fd;
var(--select-on-background-color) : #ffffff;
var(--checkbox-on-background-color) : #f9f5ff;
var(--checkbox-on-icon-color) : #f5701c;
var(--checkbox-on-border-color) : #f5701c;
var(--checkbox-off-border-color) : #d0d5dd;
var(--checkbox-off-background-color) : #ffffff;
var(--checkbox-off-icon-color) : #00000000;
var(--checkbox-disabled-border-color) : #eaecf0;
var(--checkbox-disabled-background-color) : #f2f4f7;
var(--checkbox-disabled-icon-color) : #eaecf0;
var(--checkbox-focused-off-backgroud-color) : #ffffff;
var(--checkbox-focused-off-border-color) : #fabf99;
var(--checkbox-focused-on-border-color) : #f5701c;
var(--checkbox-focused-on-backgroud-color) : #f9f5ff;
var(--checkbox-focused-on-icon-color) : #f5701c;
var(--radio-on-color) : #f5701c;
var(--radio-on-border-color) : #f5701c;
var(--radio-on-background-color) : #f9f5ff;
var(--radio-on-icon-color) : #f5701c;
var(--radio-off-border-color) : #d0d5dd;
var(--radio-off-background-color) : #ffffff;
var(--radio-focused-on-border-color) : #f5701c;
var(--radio-focused-on-color) : #f5701c;
var(--radio-focused-on-backgroud-color) : #f9f5ff;
var(--radio-focused-off-border-color) : #fabf99;
var(--radio-focused-off-backgroud-color) : #ffffff;
var(--radio-disable-border-color) : #eaecf0;
var(--radio-disable-backgroud-color) : #f2f4f7;
var(--radio-disable-color) : #eaecf0;
var(--radio-disable-icon-color) : #eaecf0;
var(--toggle-button-border-color) : #e0e0e0;
var(--toggle-button-on-text-color) : #000000;
var(--toggle-button-on-background-color) : #1d5dc4;
var(--toggle-button-off-text-color) : #888888;
var(--toggle-button-off-background-color) : #f2f4f7;
var(--toggle-button-off-border-color) : #d0d5dd;
var(--toggle-button-hover-text-color) : #000000;
var(--toggle-button-hover-background-color) : #f2f2f2;
var(--toggle-button-disabled-background-color) : #f2f2f2;
var(--toggle-button-disabled-text-color) : #cccccc;
var(--toggle-on-handle-color) : #1d5dc4;
var(--toggle-on-background-color) : #d4ecf7;
var(--toggle-off-handle-color) : #ffffff;
var(--toggle-off-background-color) : #cccccc;
var(--button-primary-cta-default-color) : #ffffff;
var(--button-primary-cta-default-border-color) : #cccccc;
var(--button-primary-cta-default-background-color) : #1d5dc4;
var(--button-primary-cta-hover-color) : #ffffff;
var(--button-primary-cta-hover-border-color) : #4881de;
var(--button-primary-cta-hover-background-color) : #4881de;
var(--button-primary-cta-disabled-color) : #ffffff;
var(--button-primary-cta-disabled-border-color) : #cccccc;
var(--button-primary-cta-disabled-background-color) : #cccccc;
var(--button-primary-outline-default-color) : #1d5dc4;
var(--button-primary-outline-default-border-color) : #cccccc;
var(--button-primary-outline-default-background-color) : #ffffff;
var(--button-primary-outline-hover-color) : #4881de;
var(--button-primary-outline-hover-border-color) : #4881de;
var(--button-primary-outline-hover-background-color) : #00000000;
var(--button-primary-outline-disabled-color) : #cccccc;
var(--button-primary-outline-disabled-border-color) : #cccccc;
var(--button-primary-outline-disabled-background-color) : #00000000;
var(--button-secondary-cta-default-color) : #1D5DC4;
var(--button-secondary-cta-default-border-color) : #EBF0FA;
var(--button-secondary-cta-default-background-color) : #EBF0FA;
var(--button-secondary-cta-hover-color) : #1D5DC4;
var(--button-secondary-cta-hover-border-color) : #EBF0FA;
var(--button-secondary-cta-hover-background-color) : #d3e2ff;
var(--button-secondary-cta-disabled-color) : #eee;
var(--button-secondary-cta-disabled-border-color) : #cccccc;
var(--button-secondary-cta-disabled-background-color) : #cccccc;
var(--button-secondary-outline-default-color) : #1d5dc4;
var(--button-secondary-outline-default-border-color) : #EBF0FA;
var(--button-secondary-outline-default-background) -color: transparent;
var(--button-secondary-outline-hover-color) : #4881de;
var(--button-secondary-outline-hover-border-color) : #4881de;
var(--button-secondary-outline-hover-background) -color: transparent;
var(--button-secondary-outline-disabled-color) : #cccccc;
var(--button-secondary-outline-disabled-border-color) : #cccccc;
var(--button-secondary-outline-disabled-background-color) : #00000000;
var(--stat-background-color) : #ffffff;
var(--mobile-bg-color) : #1d5dc4;
var(--mobile-topbar-bg-color) : #ffffff;
var(--mobile-common-card-bg) : #ffffff;
var(--mobile-main-menu-bar) : #c6edff;
var(--mobile-tabbar-bg) : #1d5dc4;
var(--mobile-sub-menu-bar-border) : #eaeaea;
var(--mobile-select-container-background-color) : #fafafa;
var(--mobile-card-list-default-background-color) : #c7f2ff;
var(--mobile-card-list-disabled-background-color) : #efefef;
var(--mobile-card-bottom-background-color) : #6cc0e6;
var(--text-toggle-default-border-color) : #cccccc;
var(--text-toggle-default-background-color) : #ffffff;
var(--text-toggle-on-text-color) : #ffffff;
var(--text-toggle-on-background-color) : #0c91e5;
var(--text-toggle-off-text-color) : #000000;
var(--text-toggle-off-background-color) : #ffffff;
var(--link-text-off-text-colot) : #667085;
var(--link-text-on-text-color) : #4881de; 


//간격
.pa0 {padding: 0px !important; }
.pt0 {padding-top: 0px !important; }
.pl0 {padding-left: 0px !important; }
.pr0 {padding-right: 0px !important; }
  
.ma0 {margin: 0px !important; }
.mt0 {margin-top: 0px !important; }
.mb0 {margin-bottom: 0px !important; }
.ml0 {margin-left: 0px !important; }
.mr0 {margin-right: 0px !important; }

.pa1 { padding: 1px !important; }
.pa--1 {padding: -1px !important; }
.pt1 {padding-top: 1px !important; }
.pt--1 {padding-top: -1px !important; }
.pb1 {padding-bottom: 1px !important; }
.pb--1 {padding-bottom: -1px !important; }
.pl1 {padding-left: 1px !important; }
.pl--1 {padding-left: -1px !important; }
.pr1 {padding-right: 1px !important; }
.pr--1 {padding-right: -1px !important; }

.ma1 {margin: 1px !important; }
.ma--1 {margin: -1px !important; }
.mt1 {margin-top: 1px !important; }
.mt--1 {margin-top: -1px !important; }
.mb1 {margin-bottom: 1px !important; }
.mb--1 {margin-bottom: -1px !important; }
.ml1 {margin-left: 1px !important; }
.ml--1 {margin-left: -1px !important; }
.mr1 {margin-right: 1px !important; }
.mr--1 {margin-right: -1px !important; }
  

//레이아웃
.text-center {text-align: center !important; }
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }
.d-flex { display: flex !important; }
.d-inline-block { display: inline-block; }
.d-block {display: block; }
    `


    return(
    <BasePage>
        <div className='previewBox'>
            <h3>CSS 작성시 기본적인 부분은 되도록 아래 속성을 이용하여 작업</h3>

            <h3>예시</h3>
            border: 1px solid var(--global-border-color);<br/>
            color: var(--brand-primary);

            <h3>속성값 업데이트 하기</h3>
            assets/css/<strong>design-token.css</strong> 파일을 열어서<br/>
            예를 들어 --brand-primary: black 값을 red 로 변경하게 되면<br/>
            var(--brand-primary) 를 사용하여 작성된 스타일이 일괄 변화됩니다.

            <h3>플러그인</h3>
            Visual Studio 에 아래 플러그인들을 추가하고 css 파일을 보면 색상값을 인지하기 쉽습니다<br/>
            - CoenraadS.brachet-pair-colorizer-2-0.2.4.vsix<br/>
            - naumovs.color-highlight-2.5.0.vsix

            <h3>가장 많이 쓰는 값</h3>
            <div style={{whiteSpace: 'pre'}}>{freCss}</div>    

            <h3>전체 속성</h3>
            <div style={{whiteSpace: 'pre'}}>{csss}</div>    
        </div>
    </BasePage>)
}
export default CssGuide;