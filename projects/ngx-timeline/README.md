# NgxTimeline ![check-code-coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

The main goal of this angular library is to give you the possibility to integrate a timeline in your app.
<br>
Version 20.0.4 is compatible with angular 20.
<br>
Go [here](https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/) and discover all possible configurations for the timeline 

![image](https://user-images.githubusercontent.com/26500344/130092921-8338496a-31df-46fa-b75f-40989eb53d33.png)
<p align = "center">
Fig.1 - Preview of <a href="https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/">Timeline example configuration page</a>
</p>
<br><br>


## Installation
Running the following command to install the library
```
npm install @frxjs/ngx-timeline
```

## Examples of Usage

After installing the library and including NgxTimelineModule in your imports module you could add one of following examples to your template in order to display your timeline

```html
<ngx-timeline [events]="events"></ngx-timeline>
<ngx-timeline [events]="events" [langCode]="'it'"></ngx-timeline>
<ngx-timeline [events]="events" [langCode]="'it'" [enableAnimation]="false"></ngx-timeline>
```

## Configuration

### Input

| Input name                     | Explanation                                                 | Mandatory | Type/Supported Values                                                                                                                       | Default value                                        |
|--------------------------------|-------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| events                         | list of events to be displayed                              | yes       | NgxTimelineEvent                                                                                                                            | no default                                           |
| langCode                       | language code use to format dates                           | no        | <ul><li>'de' (German)</li><li>'en' (English)</li><li>'es' (Spanish)</li><li>'fr' (French)</li><li>'it' (Italian)</li><li>'no' (Norwegian)</li><li>'pl' (Polish)</li><li>'pt' (Portuguese)</li><li>'ru' (Russian)</li><li>'sl' (Slovenian)</li><li>'tr' (Turkish)</li></ul> | 'en'                                                 |
| enableAnimation                | Boolean used to enable or disable the animations            | no        | boolean                                                                                                                                     | true                                                 |
| reverseOrder                   | Boolean used to reverse sort order (default older first)    | no        | boolean                                                                                                                                     | false                                                |
| virtualScroll                  | Boolean used to enable or disable the virtual scroll        | no        | boolean                                                                                                                                     | false                                                |
| virtualScrollItemSize          | Number of pixels of a single item used for virtual scroll   | no        | number                                                                                                                                      | 100                                                  |
| virtualScrollMaxBufferPx       | Number of max pixels the buffer for the virtual scroll has  | no        | number                                                                                                                                      | 200                                                  |
| virtualScrollMinBufferPx       | Minimum ammount of the buffer rendered beyond the viewport  | no        | number                                                                                                                                      | 100                                                  |
| groupEvent                     | Logic to be applied in order to group events                | no        | enum NgxTimelineEventGroup                                                                                                                  | NgxTimelineEventGroup.MONTH_YEAR                     |
| orientation                    | Orientation of the timeline                                 | no        | enum NgxTimelineOrientation                                                                                                                 | NgxTimelineOrientation.VERTICAL                      |
| changeSide                     | Logic to be applied in order to put events on LEFT or RIGHT | no        | enum NgxTimelineEventChangeSide                                                                                                             | NgxTimelineEventChangeSide.ON_DIFFERENT_DAY_IN_GROUP |
| periodCustomTemplate           | Custom Template displayed before a group of events          | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |
| eventCustomTemplate            | Custom Template displayed to show a single event            | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |
| centerIconCustomTemplate       | Custom Template displayed to show an separator icon         | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |
| dateInstantCustomTemplate      | Custom Template displayed to show the side date             | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |
| innerEventCustomTemplate       | Custom Template displayed to show the inner event           | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |
| eventDescriptionCustomTemplate | Custom Template displayed to show the description           | no        | `TemplateRef<unknown>`                                                                                                                      | no default                                           |

### Output

| Output name  | Explanation                | Mandatory | Type/Supported Values               | Default value |
|--------------|----------------------------|-----------|-------------------------------------|---------------|
| clickEmitter | Output click event emitter | no        | `OutputEmitterRef<NgxTimelineItem>` | no default    |

### Types and Enums
```typescript
interface NgxTimelineEvent {
  timestamp: Date;
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
export enum NgxTimelineOrientation {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}
```
```typescript
enum NgxTimelineEventChangeSide {
  ALL = 'ALL',
  ALL_IN_GROUP = 'ALL_IN_GROUP',
  ON_DIFFERENT_DAY_IN_GROUP = 'ON_DIFFERENT_DAY_IN_GROUP',
  ON_DIFFERENT_HMS_IN_GROUP = 'ON_DIFFERENT_HMS_IN_GROUP',
  ON_DIFFERENT_MONTH_IN_GROUP = 'ON_DIFFERENT_MONTH_IN_GROUP'
}
```

### Custom Theme supported

This is an example of custom-theme that can be applied for instance via an ng-class directive to the container of the library. In this way you are redefine some variables that are defined and used inside the library and it is easier to override some properties 
```scss
.custom-theme {
    --ngx-timeline-icon: black;
    --ngx-timeline-period-inner-container: black;
    --ngx-timeline-line-background: black;
}
```

### Examples with contexts of custom templates
```html
  <ng-template #periodCustomTemplate let-period=period let-index=index let-event=event>
    <div [ngClass]="{'transparent first-line': !index}" class="line"></div>
    <div class="period-container">
      <p>
        {{index}} - {{period | json}}
      </p>
    </div>
    <div class="line"></div>
  </ng-template>
```  
```html
  <ng-template #centerIconCustomTemplate let-index=index let-event=event>
    <div class="icon-container">
      <img src="assets/image.png">
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
  <ng-template #eventDescriptionCustomTemplate let-event=event>
    <p class="event-info-description">{{event?.eventInfo?.description}}</p>
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
<br><br>

## How to contribute
First of all, in order to track everything, open an issue describing the problem or a missing functionality you would like to add to the lib.

To start the contribution:
- `npm run watch-lib` (you are building the lib with --watch options)
- `npm run start-dev` (you are linking the lib and starting the demo app )

Every time you will change the code in your lib, any update will trigger the re-load of the app.
When your code will be ready, create a Pull Request and put the link in a comment under the issue you opened before.
Now is time to enjoy and start to code.

Thanks in advance for your contribution

## How to deploy new version (for maintainers only)
After testing the fix or the new feature with 100% test coverage:
- npm run lint:fix
- npm run prepare-github-pages
- npm run new-version patch
- git push --tags
- git push
- npm run publish
