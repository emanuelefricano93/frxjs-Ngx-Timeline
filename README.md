# NgxTimeline ![check-code-coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

The main goal of this angular library is to give you the possibility to integrate a timeline in your app.
<br/>
Version 17.0.0 is compatible with angular 17.
<br/>
Go [here](https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/) and discover all possible configurations for the timeline 

![image](https://user-images.githubusercontent.com/26500344/130092921-8338496a-31df-46fa-b75f-40989eb53d33.png)
<p align = "center">
Fig.1 - Preview of <a href="https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/">Timeline example configuration page</a>
</p>
<br/><br/>


## Installation
Running the following command to install the library
```
npm install @frxjs/ngx-timeline
```
<br/><br/>



## Examples of Usage

After installing the library and including NgxTimelineModule in your imports module you could add one of following examples to your template in order to display your timeline

```
<ngx-timeline [events]="events"></ngx-timeline>
<ngx-timeline [events]="events" [langCode]="it"></ngx-timeline>
<ngx-timeline [events]="events" [langCode]="it" [enableAnimation]="false"></ngx-timeline>
```
<br/><br/>

## Configuration

### Input
Input name                    | Explanation                                                 | Mandatory | Type/Supported Values                                                                                                                       | Default value
---                           | ---                                                         | ---       |---------------------------------------------------------------------------------------------------------------------------------------------| ---           
events                        | list of events to be displayed                              | yes       | NgxTimelineEvent                                                                                                                            | no default    
langCode                      | language code use to format dates                           | no        | <ul><li>'en'</li><li>'it'</li><li>'fr'</li><li>'de'</li><li>'es'</li><li>'sl'</li><li>'tr'</li><li>'pl'</li><li>'pt'</li><li>'ru'</li></ul> | 'en'          
enableAnimation               | Boolean used to enable or disable the animations            | no        | boolean                                                                                                                                     | true   
reverseOrder                  | Boolean used to reverse sort order (default older first)    | no        | boolean                                                                                                                                     | false   
groupEvent                    | Logic to be applied in order to group events                | no        | enum NgxTimelineEventGroup                                                                                                                  | NgxTimelineEventGroup.MONTH_YEAR
changeSideInGroup             | Logic to be applied in order to put evetns on LEFT or RIGHT | no        | enum NgxTimelineEventChangeSideInGroup                                                                                                      | NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY    
periodCustomTemplate          | Custom Template displayed before a group of events          | no        | TemplateRef<any>                                                                                                                            | no default 
eventCustomTemplate           | Custom Template displayed to show a single event            | no        | TemplateRef<any>                                                                                                                            | no default 
centerIconCustomTemplate      | Custom Template displayed to show an separator icon         | no        | TemplateRef<any>                                                                                                                            | no default 
dateInstantCustomTemplate     | Custom Template displayed to show the side date             | no        | TemplateRef<any>                                                                                                                            | no default 
innerEventCustomTemplate      | Custom Template displayed to show the inner event           | no        | TemplateRef<any>                                                                                                                            | no default 
<br/>

### Output
Output name                   | Explanation                                                 | Mandatory | Type/Supported Values                     | Default value
---                           | ---                                                         | ---       | ---                                       | ---           
clickEmitter                  |  Output click event emitter                                 | no        | BehaviorSubject<NgxTimelineItem>          | no default 
<br/>

### Types and Enums
```typescript
interface NgxTimelineEvent {
  timestamp?: Date;
  title?: string;
  description?: string;
  id?: any;
  itemPosition?: NgxTimelineItemPosition;
}
```
```typescript
enum NgxTimelineEventGroup {
  YEAR = 'YEAR',
  MONTH_YEAR = 'MONTH_YEAR',
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR'
}
```
```typescript
enum NgxTimelineEventChangeSideInGroup {
  ALL = 'ALL',
  ON_DIFFERENT_HMS = 'ON_DIFFERENT_HMS',
  ON_DIFFERENT_DAY = 'ON_DIFFERENT_DAY',
  ON_DIFFERENT_MONTH = 'ON_DIFFERENT_MONTH'
}
```
<br/>
  
### Examples with contexts of custom templates
```html
  <ng-template #periodCustomTemplate let-period=period let-index=index let-event=event>
    <div [ngClass]="{'transparent first-line': !index}" class="line"></div>
    <div class="period-container">
      <p>
        {{index}} - {{period | json  }}
      </p>
    </div>
    <div class="line"></div>
  </ng-template>
```  
```html
  <ng-template #centerIconCustomTemplate let-index=index let-event=event>
    <div class="icon-container">
      <img src="assets/image.png"/>
    </div>
  </ng-template>
```
```html
  <ng-template #innerEventCustomTemplate let-event=event>
    <div class="event" (click)="handleClick(event)">
      {{event | json}}
    </div>
  </ng-template>
```
```html
  <ng-template #eventCustomTemplate let-event=event let-colSidePosition=colSidePosition>
    <div class="event" (click)="handleClick(event)">
      {{event | json}}
    </div>
  </ng-template>
```
```html
  <ng-template #dateInstantCustomTemplate let-item=item>
    <span>
      {{item | json}}
    </span>
  </ng-template>
```    
<br/><br/>
  
## How to contribute
First of all, in order to track everything, open an issue describing the problem or a missing functionality you would like to add to the lib.

To start the contribution:
- `npm run watch-lib` (you are builduing the lib with --watch options)
- `npm run start-dev` (you are linking the lib and starting the demo app )

Every time you will change the code in your lib, any update will trigger the re-load of the app.
When your code will be ready, create a Pull Request and put the link in a comment under the issue you opened before.
Now is time to enjoy and start to code.

Thanks in advance for your contribution

## How to deploy new version (for mantainers only)
After testing the fix or the new feature with 100% test coverage:
- npm run lint:fix
- npm run prepare-github-pages
- npm run new-version patch
- git push --tags
- git push
- npm run publish
