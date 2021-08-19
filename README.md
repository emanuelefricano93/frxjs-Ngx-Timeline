# NgxTimeline ![check-code-coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

The main goal of this angular library is to give you the possibility to integrate a timeline in your app.
Here an example of a configurable timeline: https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/.

## Configuration

### Input
Input name                    | Explanation                                                 | Mandatory | Type/Supported Values                     | Default value
---                           | ---                                                         | ---       | ---                                       | ---           
events                        | list of events to be displayed                              | yes       | NgxTimelineEvent                          | no default    
langCode                      | language code use to format dates                           | no        | <ul><li>'en'</li><li>'it'</li><li>'fr'</li><li>'de'</li><li>'es'</li></ul>             | 'en'          
enableAnimation               | Boolean used to enable or disable the animations            | no        | boolean                                   | true   
groupEvent                    | Logic to be applied in order to group events                | no        | enum NgxTimelineEventGroup                | NgxTimelineEventGroup.MONTH_YEAR
changeSideInGroup             | Logic to be applied in order to put evetns on LEFT or RIGHT | no        | enum NgxTimelineEventChangeSideInGroup    | NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY    
periodCustomTemplate          | Custom Template displayed before a group of events          | no        | TemplateRef<any>                          | no default 
eventCustomTemplate           | Custom Template displayed to show a single event            | no        | TemplateRef<any>                          | no default 
centerIconCustomTemplate      | Custom Template displayed to show an separator icon         | no        | TemplateRef<any>                          | no default 
dateInstantCustomTemplate     | Custom Template displayed to show the side date             | no        | TemplateRef<any>                          | no default 
innerEventCustomTemplate      | Custom Template displayed to show the inner event           | no        | TemplateRef<any>                          | no default 


### Output
Output name                   | Explanation                                                 | Mandatory | Type/Supported Values                     | Default value
---                           | ---                                                         | ---       | ---                                       | ---           
clickEmitter                  |  Output click event emitter                                 | no        | BehaviorSubject<NgxTimelineItem>          | no default 


### Types and Enums
```typescript
interface NgxTimelineEvent {
  timestamp?: Date;
  title?: string;
  description?: string;
  id?: any;
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
  
### Context for custom templates
```html
  <ng-template #periodCustomTemplate let-period=period let-index=index>
    ...
  </ng-template>
```  
```html
  <ng-template #periodCustomTemplate let-period=period let-index=index>
    ...
  </ng-template>
```  
  
## How to contribute
First of all, in order to track everything, open an issue describing the problem or a missing functionality you would like to add to the lib.

To start the contribution:
- `npm run watch-lib` (you are builduing the lib with --watch options)
- `npm run start-dev` (you are linking the lib and starting the demo app )

Every time you will change the code in your lib, any update will trigger the re-load of the app.
When your code will be ready, create a Pull Request and put the link in a comment under the issue you opened before.
Now is time to enjoy and start to code.

Thanks in advance for your contribution
